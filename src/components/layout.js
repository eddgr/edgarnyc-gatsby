import React from "react";
import { Link } from "gatsby";

import SEO from "./seo";
import { homeIcon } from "../utils";

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
        {homeIcon}
      </Link>
    }
    {props.children}
    <div id="footer" className="bg-dark text-light p-4 mt-4">
      Links and stuff here
    </div>
  </>
}
