import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <section className='section'>
      <div className='container'>
        <h1 className='title is-1'> About Me </h1>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </section>
  )
}

export default About
