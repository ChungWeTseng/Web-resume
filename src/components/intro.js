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
    backgroundSize: `cover`,
    backgroundAttachment: 'fixed'
  }

  const button = {
    marginTop: '3em',
    paddingLeft: '15%',
    paddingRight: '15%'
  }

  return (
    <section className='hero is-primary is-fullheight' style={background} id='intro' >
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <a className='button is-primary is-fullwidth-mobile' href='https://github.com/ChungWeTseng/CurriculumVitae/raw/master/cv.pdf' style={button}> Download my CV </a>
        </div>
      </div>
    </section>
  )
}

export default Intro
