import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout"

export default function Project({ data }) {

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
  }
`
