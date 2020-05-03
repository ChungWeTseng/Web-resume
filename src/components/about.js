import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FadeInSection from './fadein-section'

const About = () => {

  const {content: {frontmatter: {description}}} = useStaticQuery(graphql`
    query {
      content: markdownRemark(fileAbsolutePath: {regex: "/about.md/"}) {
        frontmatter {
          description
        }
      }
    }
  `)

  return (
    <section className='section' id='about'>
      <FadeInSection className='container'>
        <h1 className='title is-1 is-size-2-mobile'> About Me </h1>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </FadeInSection>
    </section>
  )
}

export default About
