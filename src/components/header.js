import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <nav class='navbar is-dark' role='navigation' aria-label='main-navigation'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='#'>
          <img></img>
          <h1 class='has-text-weight-bold'> Chung We Tseng Fang </h1>
        </a>
        <a role='button' class='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div class='navbar-menu'>
        <div class='navbar-end'>
          <a class='navbar-item' href='#'> Experience </a>
          <a class='navbar-item' href='#'> Education </a>
          <a class='navbar-item' href='#'> Skills & Languages </a>
          <a class='navbar-item' href='#'> Portfolio </a>
          <a class='navbar-item' href='#'> Contact </a>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
