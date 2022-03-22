import { Link } from "gatsby";
import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components'

import SEO from "./seo";
import { homeIcon } from "../utils";
import { renderSocial } from "../utils/social";

export default function Layout(props) {
  const { title, description, page, imgUrl } = props;

  const [currentScroll, setCurrentScroll] = useState(window.scrollY)
  const [display, setDisplay] = useState('none')

  // display NavBar when user scrolls up
  const handleNavBar = useCallback(() => {
    if (currentScroll > window.scrollY) {
      setDisplay('flex')
    } else {
      setDisplay('none')
    }
    setCurrentScroll(window.scrollY)
  }, [currentScroll])

  const NavBar = styled.div`
    display: ${display};
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    top: 0;
    height: 80px;
    width: 100%;
    background: #1b1b1b;
    color: #fff;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin: 0 16px 0;
      }
    }
  `
  const Nav = () => {
    return <NavBar>
      <div id="profile">
        Profile photo
      </div>
      <div id="menu">
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </div>
      </NavBar>
  }

  useEffect(() => {
    window.removeEventListener('scroll', handleNavBar)
    window.addEventListener('scroll', handleNavBar)
    return () => window.removeEventListener('scroll', handleNavBar)
  }, [handleNavBar])

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
