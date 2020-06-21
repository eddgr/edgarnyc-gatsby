import React from "react";

import SEO from "./seo"

export default function Layout(props) {
  const { title, description } = props;
  return <>
    <SEO
      title={title}
      description={description}
    />
    {props.children}
    <div id="footer" className="bg-dark text-white p-4 mt-4">
      Links and stuff here
    </div>
  </>
}
