import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import Experiences from "../components/experiences"
import Educations from "../components/educations"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Experiences />
    <Educations />
  </Layout>
)

export default IndexPage
