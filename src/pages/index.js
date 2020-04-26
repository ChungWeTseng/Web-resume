import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import Experiences from "../components/experiences"
import Educations from "../components/educations"
import Certifications from "../components/certifications"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Experiences />
    <Educations />
    <Certifications />
    <Skills />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
