import React, { Component } from 'react'


class Header extends Component {
  state = { active: false, menu: null };

  componentDidMount() {
    document.addEventListener('mousedown', this.closeMenu);
    this.setState({ menu: document.querySelector('.navbar') });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.closeMenu);
  }

  toogleMenu = () => {
    this.setState({ active: !this.state.active })
  }

  closeMenu = (event) => {
    if ( !this.state.menu.contains(event.target) ){
      this.setState({ active: false })
    }
  }

  render() {
    const menuButton = {
      backgroundColor: 'transparent',
      border: 'none'
    }

    return (
      <header>
        <nav className='navbar is-fixed-top is-dark' role='navigation' aria-label='main-navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='#intro'>
              <h1 className='has-text-weight-bold'> Chung We Tseng Fang </h1>
            </a>
            <button style={menuButton} className='navbar-burger burger' aria-label='menu' aria-expanded='false' onClick={this.toogleMenu}>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </button>
          </div>
          <div className={`navbar-menu ${this.state.active ? 'is-active' : ''}`}>
            <div className='navbar-end'>
              <a className='navbar-item' href='#about'> About Me </a>
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
    );
  }
}

export default Header
