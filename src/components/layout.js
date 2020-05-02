/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import '../styles/bulma-custom.sass'
import '../styles/global.scss'
import Header from "./header"

const Layout = ({ children }) => {
  const dark = {
    backgroundColor: '#363636',
    color: '#fff'
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className='footer' style={dark}>
        <div className='content has-text-centered'>
          © Copyright 2020 Chung We Tseng Fang
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
