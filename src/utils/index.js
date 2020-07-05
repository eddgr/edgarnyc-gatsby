import React from "react";

import { includes, orderBy } from 'lodash'

import { OutboundLink } from "gatsby-plugin-google-analytics";

export const OutboundLinkGA = props => {
  const { ariaLabel, eventLabel, href, target, children, className } = props;
  return <OutboundLink
    aria-label={ariaLabel}
    href={href}
    eventLabel={eventLabel}
    target={target}
    rel='noopener noreferrer'
    className={className}>
    {children}
  </OutboundLink>
}

export function getImgFluid(data, imgName) {
  const filteredImg = data.allFile.nodes.find(node => node.childImageSharp.fluid.originalName === imgName)
  return filteredImg.childImageSharp.fluid;
}

const style = {'marginTop': '-4px', 'marginRight': '4px'}

export const homeIcon = (
  <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
  </svg>
)

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

export const githubIcon = (
  <svg role="img" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub icon</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

export const twitterIcon = (
  <svg role="img" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Twitter icon</title>
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
  </svg>
)

export const linkedinIcon = (
  <svg role="img" width="1em" height="1em" fill="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn icon</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

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

