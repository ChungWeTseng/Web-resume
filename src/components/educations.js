import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FadeInSection from './fadein-section'

const Education = props => {
  const {name, location, start, end, details} = props.education;

  const level = { marginBottom: '.3em' }

  const row = { margin: '1.5em 0' }

  return (
    <div className='columns' style={row}>
      <div className='column is-one-quarter'>
        <p className='title is-5 is-marginless'>{end}</p>
        <p className='title is-5 is-marginless'>{start}</p>
      </div>
      <div className='column'>
        <div className='level' style={level}>
          <div className='level-left title is-5 is-marginless'> {name} </div>
          <div className='level-right title is-6 is-marginless'> {location} </div>
        </div>
        <p>{details}</p>
      </div>
    </div>
  )
}

const Educations = () => {

  const {content: {frontmatter: {educations}}} = useStaticQuery(graphql`
    query {
      content: markdownRemark(fileAbsolutePath: {regex: "/educations.md/"}) {
        frontmatter {
          educations{
            name
            location
            start
            end
            details
          }
        }
      }
    }
  `)

  return (
    <section className='section' id='education'>
      <FadeInSection className='container'>
        <h1 className='title is-1 is-size-2-mobile'> Education </h1>
        { educations.map((education, index) => {
          return <Education key={index} education={education} />
        }) }
      </FadeInSection>
    </section>
  )
}

export default Educations
