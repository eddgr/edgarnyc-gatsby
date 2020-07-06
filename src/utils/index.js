import React from "react";

import { includes, orderBy } from 'lodash'

import { OutboundLink } from "gatsby-plugin-google-analytics";

// General
export const OutboundLinkGA = props => {
  const { ariaLabel, eventLabel, href, children, className } = props;
  return <OutboundLink
    aria-label={ariaLabel}
    href={href}
    eventLabel={eventLabel}
    rel="noopener noreferrer"
    target="_blank"
    className={className}>
    {children}
  </OutboundLink>
}

export function getImgFluid(data, imgName) {
  const filteredImg = data.allFile.nodes.find(node => node.childImageSharp.fluid.originalName === imgName)
  return filteredImg.childImageSharp.fluid;
}

const style = {'marginTop': '-4px', 'marginRight': '4px'}

export const laptopIcon = (
  <svg style={style} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
  </svg>
)

export const mobileIcon = (
  <svg style={style} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
    <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
)

export const homeIcon = (
  <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
  </svg>
)


// Blog
// SimilarArticlesFactory.js
// https://khalilstemmler.com/articles/gatsby-related-posts-component/
export class SimilarArticlesFactory {
  // (1.) Create by passing in articles, currentSlug
  constructor (articles, currentArticleSlug) {
    // (2.) Don't include the current article in articles list
    this.articles = articles.filter(
      (aArticle) => aArticle.slug !== currentArticleSlug);

    this.currentArticleSlug = currentArticleSlug;
    // (3.) Set default values
    this.maxArticles = 3;
    this.tags = []
  }

  // (4.) Builder pattern usage
  setMaxArticles (m) {
    this.maxArticles = m;
    return this;
  }

  setTags (tagsArray) {
    this.tags = tagsArray;
    return this;
  }

  getArticles () {
    const { tags, articles, maxArticles } = this;
    // (5.) We use an Identity Map to keep track of score
    const identityMap = {};

    if (!!tags === false || tags.length === 0) {
      console.error('SimilarArticlesFactory: Tags not provided, use setTags().')
      return [];
    }

    function getSlug (article) {
      return article.slug;
    }

    function addToMap (article) {
      const slug = getSlug(article);
      if (!identityMap.hasOwnProperty(slug)) {
        identityMap[slug] = {
          article: article,
          points: 0
        }
      }
    }

    // (7.) For tags matches, we add 1 point
    function addTagsPoints (article, tags) {
      const tagPoint = 1;
      const slug = getSlug(article);
      
      article.tags.forEach((aTag) => {
        if (includes(tags, aTag)) {
          identityMap[slug].points += tagPoint;
        }
      })
    }

    function getIdentityMapAsArray () {
      return Object.keys(identityMap).map((slug) => identityMap[slug]);
    }
    
    // (6.) Map over all articles, add to map and add points
    for (let article of articles) {
      addToMap(article);
      addTagsPoints(article, tags)
    }
    
    // (8.) Convert the identity map to an array
    const arrayIdentityMap = getIdentityMapAsArray();

    // (9.) Use a lodash utility function to sort them 
    // by points, from greatest to least
    const similarArticles = orderBy(
      arrayIdentityMap, ['points'], ['desc']
    )

    // (10. Take the max number articles requested)
    return similarArticles.splice(0, maxArticles);
  }
}

