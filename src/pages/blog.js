import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        nodes {
          id
          title
          slug
          heroImage {
            fluid(maxWidth: 960) {
              src
            }
          }
        }
      }
    }
  `) 

  const renderItems = () => {
    const nodes = data.allContentfulBlogPost.nodes;
    return nodes.map(node => {
      const { id, title, heroImage, slug } = node;
      return <div key={id}>
        <img src={heroImage.fluid.src} alt={title} />
        <Link to={`/blog/${slug}`}><h2>{title}</h2></Link>
      </div>
    });
  }

  return <>
    <SEO
      title="Blog page"
      description="test blog description"
    />
    {renderItems()}
  </>
}

export default BlogPage
