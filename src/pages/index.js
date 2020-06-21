import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import SEO from "../components/seo"

import "../assets/css/global.css";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        nodes {
          id
          title
          slug
          description {
            description
          }
          heroImage {
            fluid(resizingBehavior: FILL, cropFocus: CENTER, maxHeight: 184, maxWidth: 350) {
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
      const { id, title, heroImage, slug, description } = node;
      return <div key={id} className="col-sm-4 mb-4">
        <div className="card">
          <Link to={slug}>
            <img src={heroImage.fluid.src} alt={title} className="card-img-top" />
          </Link>
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <div className="card-text">
                {description.description}
              </div>
            </div>
        </div>
      </div>
    });
  }

  return <>
    <SEO
      title="Blog page"
      description="test blog description"
    />
    <div id="hero" className="hero row bg-dark text-light p-4 ml-0 mr-0">
      Intro here
    </div>
    <div id="content" className="container mt-4">
      <div className="row">
        {renderItems()}
      </div>
    </div>
    <div id="footer" className="bg-dark text-white p-4 mt-4">
      Links and stuff here
    </div>
  </>
}

export default BlogPage
