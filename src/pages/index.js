import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import { graphql } from "gatsby"
import "../styles/index.scss"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div class="container" style = {{
              maxWidth: "100%",
              marginBottom: "1.5rem"
            }}>
      <img  alt="code" src={require("../images/codeBG.jpg")} />
      <h1 className="centered">Welcome</h1>
    </div>
    <p>Welcome to my new website!</p>
    <p>Have a nice day.</p>
    <h1>Recent Blog Posts</h1>

    {data.recentMarkdownRemark.edges.map(post => (
      <PostPreview blogPost = {post}></PostPreview>
    ))}

    <p>Have a nice day.</p>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    recentMarkdownRemark(limit: 3) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
