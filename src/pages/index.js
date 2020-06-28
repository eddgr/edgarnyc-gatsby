import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import "../assets/css/global.css";

export default function IndexPage({ data }) {
  const filterImgByName = imageName => {
    const filteredImg = data.allFile.nodes.filter(node => node.childImageSharp.fluid.originalName === imageName)[0]
    return filteredImg.childImageSharp.fluid;
  }

  const renderItems = () => {
    const nodes = data.allContentfulBlogPost.nodes;
    return nodes.map(node => {
      const { id, title, heroImage, slug, description } = node;
      return <div key={id} className="col-sm-4 mb-4">
        <div className="card border-0">
          <Link to={slug}>
            <Img fluid={heroImage.fluid} alt={title} className="card-img-top rounded-lg" />
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

  const renderProjects = () => {
    const nodes = data.allProjectsJson.nodes;
    return nodes.map(project => {
      const { name, slug, screenshots } = project;
      return <div key={slug} className="col-sm-6">
        <Link to={project.slug}>
          <Img fluid={filterImgByName(screenshots.main)} alt={name} />
          {name}
        </Link>
      </div>
    })
  }
  
  const title = 'Life After Coding Bootcamp as a Software Engineer'
  const description = "I'm a NYC based Full Stack Web Developer with experience in Ruby, JavaScript, and Python frameworks."

  const profileImage = filterImgByName("edgar-ong.jpg"); 

  return <Layout
    title={title + ' | Edgar <3 NYC'}
    description={description + ' Learn how I landed my first developer role.'}>
    <div id="hero" className="hero row text-light p-4 ml-0 mr-0">
      <div className="container row mx-auto align-items-center">
        <div className="col-sm-9">
          <h1 className="mb-4">Hi, my name is Edgar.</h1>
          <p>{description}</p>
          <p>Currently, I'm a Software Engineer at <a href='https://www.superdataresearch.com'>SuperData Research, a Nielsen Company</a> where I build business intelligence tools around video game data.</p>
          <p>This is where I share my projects and write about software development.</p>
        </div>
        <div className="col-sm-3 mt-4 mb-4">
          <div className="mb-4 mx-auto" style={{'maxWidth': '160px'}}>
            <Img fluid={profileImage} imgStyle={{'borderRadius': '50%'}} />
          </div>
          <div className="text-center">
              <button className="btn btn-info"
                aria-label="View Resume">
                Learn More 
              </button>
          </div>
    
        </div>
      </div>
    </div>
    <div id="content" className="container mt-4 mb-4 pt-4 pb-4">
      <div className="mb-4">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {renderProjects()}
        </div>
      </div>
      <div>
        <h2 className="text-center mb-4">Blog</h2>
        <div className="row">
          {renderItems()}
        </div>
      </div>
    </div>
  </Layout>
}

export const data = graphql`
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
            srcSet
            sizes
            aspectRatio
          }
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      nodes {
        childImageSharp {
          fluid {
            aspectRatio
            src
            sizes
            srcSet
            originalName
          }
        }
      }
    }
    allProjectsJson {
      nodes {
        name
        slug
        screenshots {
          main
        }
      }
    }
  }
` 
