import React from "react";
import { Link } from "gatsby";

import SEO from "./seo";
import { homeIcon, githubIcon, twitterIcon, linkedinIcon, OutboundLinkGA } from "../utils";

export default function Layout(props) {
  const { title, description, page, imgUrl } = props;

  const social = {
    'github': {
      'icon': githubIcon,
      'url': 'https://github.com/eddgr',
      'label': 'Github'
    },
    'twitter': {
      'icon': twitterIcon,
      'url': 'https://twitter.com/eddgr',
      'label': 'Twitter'
    },
    'linkedin': {
      'icon': linkedinIcon,
      'url': 'https://linkedin.com/eddgr',
      'label': 'LinkedIn'
    }
  }

  const renderSocial = () => {
    const socialKeys = Object.keys(social);
    return socialKeys.map(key => {
      return <OutboundLinkGA
        href={social[key].url}
        target="_blank"
        className="ml-1 mr-1"
        key={key}
        eventLabel={`Click ${social[key].label}`}
      >
        {social[key].icon}
      </OutboundLinkGA>
    })
  }

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
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <strong>Edgar ❤ NYC</strong>
        </div>
        <div>
          {renderSocial()}
        </div>
      </div>
    </div>
  </>
}
