import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import styled from 'styled-components'

import SEO from "./seo";
import { homeIcon } from "../utils";
import { renderSocial } from "../utils/social";

export default function Layout(props) {
  const { title, description, page, imgUrl } = props;

  const [display, setDisplay] = useState('none')

  const handleNavBar = () => {
    if (window.pageYOffset > window.innerHeight) {
      setDisplay('block')
    }
    if (window.pageYOffset < window.innerHeight) {
      setDisplay('none')
    }
  }
  const NavBar = styled.div`position: fixed; z-index: 1; display: ${display}`
  const Nav = () => {
    return <NavBar>
      Profile photo
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
      </ul>
      </NavBar>
  }

  useEffect(() => {
    window.removeEventListener('scroll', handleNavBar)
    window.addEventListener('scroll', handleNavBar)
    return () => window.removeEventListener('scroll', handleNavBar)
  }, [])

  return <>
    <SEO
      title={title}
      description={description}
      imgUrl={imgUrl}
    />

    {Nav()}

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
