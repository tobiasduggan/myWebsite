import React from "react"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundImage from "../images/codeBG.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style ={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      height: "100vh"}}
      >
      <h1>Welcome</h1>
    </div>
    <p>Welcome to my new website!</p>
    <p>Now, have a nice day.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
  </Layout>
)

export default IndexPage
