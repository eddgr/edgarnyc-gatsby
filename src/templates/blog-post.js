import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const { title, body, heroImage, description } = data.contentfulBlogPost;
  return <>
    <SEO
      title={title}
      description={description.description}
    />
    <div id="hero" className="hero row bg-dark text-light p-4 ml-0 mr-0">
      <h1>{title}</h1>
    </div>
    <div className="container mt-4">
      <div className="article">
        <img src={heroImage.fluid.src} alt={title} className="w-100" />
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}/>
      </div>
    </div>
  </> 
}

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      heroImage {
        fluid(maxWidth: 800) {
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
    }
  }
`
