import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="container">
      <img alt="code" src={require('../images/codeBG.jpg')}/> 
      <h1 class="centered">Welcome</h1>
    </div>
    <p>Welcome to my new website!</p>
    <p>Have a nice day.</p>
  </Layout>
)

export default IndexPage
