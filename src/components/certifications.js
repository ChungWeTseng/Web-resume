import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Certification = props => {
  const {name, date} = props.certification;

  const row = { margin: '1.5em 0' }

  return (
    <div className='columns' style={row}>
      <div className='column is-one-quarter'>
        <p className='title is-5 is-marginless'>{date}</p>
      </div>
      <div className='column'>
        <p className='title is-5 is-marginless'> {name} </p>
      </div>
    </div>
  )
}

const Certifications = () => {

  const {content: {frontmatter: {certifications}}} = useStaticQuery(graphql`
    query {
      content: markdownRemark(fileAbsolutePath: {regex: "/certifications.md/"}) {
        frontmatter {
          certifications{
            name,
            date
          }
        }
      }
    }
  `)

  return (
    <section className='section' id='certifications'>
      <div className='container'>
        <h1 className='title is-1 is-size-2-mobile'> Certifications </h1>
        { certifications.map((certification, index) => {
          return <Certification key={index} certification={certification} />
        }) }
      </div>
    </section>
  )
}

export default Certifications
