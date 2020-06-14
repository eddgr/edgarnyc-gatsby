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
    <img src={heroImage.fluid.src} alt={title} />
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}/>
  </> 
}

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      heroImage {
        fluid {
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
