import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import { getImgFluid, laptopIcon, mobileIcon, OutboundLinkGA } from "../utils";

export default function Project({ data }) {
  const { name, screenshots, stack, url, mobile, features, description, challenges } = data.projectsJson;

  const renderFeatures = () => {
    return features.map((feature, idx) => {
      return <div className="col-sm-6 text-center mb-4"
        key={feature}>
        <Img fluid={getImgFluid(data, screenshots.features[idx])} alt={name} />
        <p>{feature}</p>
      </div>
    })
  }

  return <Layout title={name} description={description[0]} page={true}>
    {/* Header Section */}
    <div id="hero" className="hero d-flex justify-content-center text-light">
      <div className="container row align-items-center justify-content-center mt-4 mb-4">
        <div className="col-sm-4">
          <Img fluid={getImgFluid(data, screenshots.main)} alt={name} />
        </div>
        <div className="col-sm-8 mt-4 mb-4">
          <h1 className="text-center text-lg-left">{name}</h1>

          {description.map(desc => <p key={desc}>{desc}</p>)}

          <OutboundLinkGA
            href={url.demo}
            className="text-decoration-none"
            eventLabel={`View ${name} Demo`}
            ariaLabel={`View ${name} Demo`}
          >
            <button
              className="btn btn-info mx-auto d-block d-lg-inline mt-4">
              {mobile ? (
                mobileIcon
              ) : (
                laptopIcon
              )}{" "}
              View Demo
            </button>
          </OutboundLinkGA>
        </div>
      </div>
    </div>
   {/* Main Content */} 
    <div id="content" className="container mt-4 p-4">
      <h2 className="mb-4 text-center">Screenshots</h2>
      <div id="features" className="row mb-4 bg-primary rounded-lg">
        {renderFeatures()}
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h3>Stack</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> {stack.frontend} {" "} 
              <OutboundLinkGA
                eventLabel={`View ${name} Frontend Github`}
                ariaLabel={`View ${name} Frontend Github`}
                href={url.frontend}
              >
                <span className="text-info">
                  <small>(View Github)</small>
                </span>
              </OutboundLinkGA>
            </li>
            <li>
              <strong>Backend:</strong> {stack.backend} {" "}
              <OutboundLinkGA
                eventLabel={`View ${name} Backend Github`}
                ariaLabel={`View ${name} Backend Github`}
                href={url.backend}
              >
                <span className="text-info">
                  <small>(View Github)</small>
                </span>
              </OutboundLinkGA>
            </li>
            <li>
              <strong>Libraries:</strong> {stack.other}
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h3>Challenges</h3>
          <ul>
            {challenges.map(challenge => <li key={challenge}>{challenge}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
}

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: {eq: $slug}) {
      name
      slug
      screenshots {
        main
        features
      }
      stack {
        frontend
        backend
        other
      }
      url {
        backend
        demo
        frontend
      }
      mobile
      features
      description
      challenges
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
  }
`
