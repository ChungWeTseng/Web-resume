import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Experience = props => {
  const {name, location, start, end, role, details} = props.experience;

  const list = {
    listStyle: 'square',
    marginLeft: '1em',
  }

  const level = { marginBottom: '1em' }

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
        <div> {role} </div>
        <ul style={list}>
          { details.map( (detail, index) => {
            return <li key={index}> {detail} </li>
          })}
        </ul>
      </div>
    </div>
  )
}

const Experiences = () => {

  const {content: {frontmatter: {experiences}}} = useStaticQuery(graphql`
    query {
      content: markdownRemark(fileAbsolutePath: {regex: "/experiences.md/"}) {
        frontmatter {
          experiences{
            name
            location
            start
            end
            role
            details
          }
        }
      }
    }
  `)

  return (
    <section className='section' id='experience'>
      <div className='container'>
        <h1 className='title is-1 is-size-2-mobile'> Experience </h1>
        { experiences.map((experience, index) => {
          return <Experience key={index} experience={experience} />
        }) }
      </div>
    </section>
  )
}

export default Experiences
