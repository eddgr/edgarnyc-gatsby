import React from "react";
import { Link } from "gatsby";

import SEO from "./seo";
import { homeIcon } from "../utils";
import { renderSocial } from "../utils/social";

export default function Layout(props) {
  const { title, description, page, imgUrl } = props;

  return <>
    <SEO
      title={title}
      description={description}
      imgUrl={imgUrl}
    />

    {
      page &&
      <Link to={'/'} aria-label="Go To Homepage" className="nav mt-4 ml-3">
        {homeIcon}
      </Link>
    }

    {props.children}

    <div id="footer" className="bg-dark text-light p-4 mt-4 d-flex align-items-center justify-content-between">
      <div>
        <strong>Edgar ❤ NYC</strong>
      </div>
      <div id="social">
        {renderSocial()}
      </div>
    </div>
  </>
}
