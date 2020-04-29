import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Skill = props => {
  const skills = props.skills;
  const category = props.category;

  const row = { margin: '.5em 0' }
  const margin = { marginBottom: '.25em' }
  const font = { fontSize: '1.1rem' }

  return (
    <div className='columns' style={row}>
      <div className='column is-one-quarter'>
        <p className='title is-5 is-marginless'>{category}</p>
      </div>
      <div className='column'>
        <div className='columns is-7 is-multiline is-mobile'>
          { skills.map((skill, index) => {

            const list =  <div key={index} className='column is-narrow'>
                            <p className='is-italic has-text-grey-dark' style={font}> {skill.name} </p>
                          </div>;

            const lang =  <div key={index} className='column is-narrow is-one-quarter-tablet'>
                            <p className='title is-6 is-italic has-text-grey-dark' style={margin}> {skill.name} </p>
                            <p className='has-text-grey' style={font}> {skill.proficiency} </p>
                          </div>;

            return  category === 'Languages' ? lang : list;
          })}
        </div>
      </div>
    </div>
  )
}

const Skills = () => {

  const {content: {frontmatter: {skills}}} = useStaticQuery(graphql`
    query {
      content: markdownRemark(fileAbsolutePath: {regex: "/skills.md/"}) {
        frontmatter {
          skills{
            Programming{
              name
            }
            Databases {
              name
            }
            Web {
              name
            }
            Frameworks {
              name
            }
            Others {
              name
            }
            Languages {
              name
              proficiency
            }
          }
        }
      }
    }
  `)

  return (
    <section className='section' id='skills'>
      <div className='container'>
        <h1 className='title is-1 is-size-2-mobile'> Skills and Languages </h1>
        { Object.entries(skills).map( ([category, skill], index) => {
          return <Skill key={index} category={category} skills={skill} />
        }) }
      </div>
    </section>
  )
}

export default Skills
