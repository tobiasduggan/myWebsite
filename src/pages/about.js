import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <img alt="me" src={require('../images/myFace.jpg')}/> 
    <p>Hey!</p>
  </Layout>
)

export default SecondPage
