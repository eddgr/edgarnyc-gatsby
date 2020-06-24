import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const { title, body, heroImage, description, updatedAt, author } = data.contentfulBlogPost;
  const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' }
  const parsedDate = new Date(updatedAt).toLocaleDateString([], dateFormat);
  return <Layout title={title} description={description.description} imgUrl={heroImage.fluid.src} page={true}>
    <div id="hero" className="hero row bg-dark text-light p-4 ml-0 mr-0">
      <div className="text-center">
        <h1>{title}</h1>
        <small>by {author.name} | <strong>Last Updated:</strong> {parsedDate}</small>
      </div>
    </div>
    <div className="container mb-4 mt-4">
      <div className="article">
        <div className="mb-4">
          <img src={heroImage.fluid.src} alt={title} className="w-100 rounded-lg" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}/>
      </div>
    </div>
  </Layout> 
}

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      heroImage {
        fluid(resizingBehavior: FILL, cropFocus: CENTER, maxHeight: 420, maxWidth: 800) {
          src
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
    }
  }
`
