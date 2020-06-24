import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"

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
        <div className="card border-0">
          <Link to={slug}>
            <img src={heroImage.fluid.src} alt={title} className="card-img-top rounded-lg" />
          </Link>
            <div className="card-body p-0">
              <h4 className="card-title mb-2 mt-2">{title}</h4>
              <div className="card-text">
                {description.description}
              </div>
            </div>
        </div>
      </div>
    });
  }
  
  const title = 'Life After Coding Bootcamp as a Software Engineer'
  const description = 'Hi, my name is Edgar Ong. I completed a 15 week coding bootcamp at Flatiron School. In less than a month after graduating, I accepted an offer as a Software Engineer.'

  return <Layout
    title={title + ' | Edgar <3 NYC'}
    description={description + ' Learn how I landed my first developer role.'}>
    <div id="hero" className="hero row bg-dark text-light p-4 ml-0 mr-0">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>This is where I write about my coding journey and how I landed my first developer role.</p>
      </div>
    </div>
    <div id="content" className="container mt-4 mb-4 pt-4 pb-4">
      <div className="row">
        {renderItems()}
      </div>
    </div>
  </Layout>
}

export default BlogPage
