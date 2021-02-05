import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import { SimilarArticlesFactory } from "../utils";

export default function BlogPost({ data }) { 
  const { title, body, heroImage, description, updatedAt, author, slug, tags } = data.contentfulBlogPost;
  const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' }
  const parsedDate = new Date(updatedAt).toLocaleDateString([], dateFormat);

  const articles = data.allContentfulBlogPost.nodes;
  const similarArticles = new SimilarArticlesFactory(
    articles, slug
  )
    .setMaxArticles(4)
    .setTags(tags)
    .getArticles()

  const renderSimilarArticles = () => {
    if (similarArticles.length === 0) {
      return;
    }

    const listArticles = similarArticles.map(article => {
      const { title, description, slug } = article.article;
      return (
        <React.Fragment key={title}>
          <Link to={`/${slug}`}><h4 className="mb-2">{title}</h4></Link>
          <p className="small">{description.description}</p>
        </React.Fragment>
      )
    });

    return <div id="related-posts" className="related-posts">
      <hr />
      <h3 className="mb-4 mt-4">Recommended Reading</h3>
      {listArticles}
    </div>
  }

  return <Layout title={title} description={description.description} imgUrl={heroImage.fluid.src} page={true}>
    <div id="content" className="container article">
      <div id="article-header" className="mt-4">
        <Img fluid={heroImage.fluid} alt={title} className="w-100 rounded-lg" />
        <div className="text-center mt-4 mb-4">
          <h1 className="mb-1">{title}</h1>
          <small>by {author.name} | <strong>Last Updated:</strong> {parsedDate}</small>
        </div>
        <hr />
      </div>
      <div id="article-body" className="mt-4">
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}/>
      </div>
      {renderSimilarArticles()}
    </div>
  </Layout> 
}

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      heroImage {
        fluid(resizingBehavior: FILL, cropFocus: CENTER, maxHeight: 420, maxWidth: 800) {
          src
          srcSet
          sizes
          aspectRatio
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      title
      description {
        description
      }
      updatedAt
      author {
        name
      }
      slug
      tags
    }
    allContentfulBlogPost {
    nodes {
      tags
      title
      description {
        description
      }
      slug
    }
  }
  }
`
