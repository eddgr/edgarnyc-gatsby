import React from "react";
import { Link } from "gatsby";

import SEO from "./seo"

export default function Layout(props) {
  const { title, description, page, imgUrl } = props;
  return <>
    <SEO
      title={title}
      description={description}
      imgUrl={imgUrl}
    />
    { page &&
      <Link to={'/'} className="nav bg-info">
        <svg class="bi bi-house-fill" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
        </svg>
      </Link>
    }
    {props.children}
    <div id="footer" className="bg-dark text-white p-4 mt-4">
      Links and stuff here
    </div>
  </>
}
