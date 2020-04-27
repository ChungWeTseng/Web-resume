import React from 'react'

const Header = () => (
  <header>
    <nav className='navbar is-fixed-top is-dark' role='navigation' aria-label='main-navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='#intro'>
          <h1 className='has-text-weight-bold'> Chung We Tseng Fang </h1>
        </a>
        <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <a className='navbar-item' href='#experience'> Experience </a>
          <a className='navbar-item' href='#education'> Education </a>
          <a className='navbar-item' href='#certifications'> Certifications </a>
          <a className='navbar-item' href='#skills'> Skills & Languages </a>
          <a className='navbar-item' href='#portfolio'> Portfolio </a>
          <a className='navbar-item' href='#contact'> Contact </a>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
