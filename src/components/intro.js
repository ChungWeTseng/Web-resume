import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Intro = () => {

  const {background: {childImageSharp: {fluid: {image}}}, content: {html}} = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "intro.jpg" }) {
        childImageSharp {
          fluid {
            image: originalImg
          }
        }
      }
      content: markdownRemark(fileAbsolutePath: {regex: "/intro.md/"}) {
        html
      }
    }
  `)

  const background = {
    backgroundImage: `url(${image})`,
    backgroundSize: `cover`
  }

  const button = {
    marginTop: '3em',
    paddingLeft: '10em',
    paddingRight: '10em'
  }

  return (
    <section className='hero is-primary is-fullheight' style={background} >
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <button className='button is-primary' style={button}> Download my CV </button>
        </div>
      </div>
    </section>
  )
}

export default Intro
