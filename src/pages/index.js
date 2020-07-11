import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import '../styles/index.scss'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div class="container">
      <img alt="code" src={require('../images/codeBG.jpg')}/> 
      <h1 className="centered">Welcome</h1>
    </div>
    <p>Welcome to my new website!</p>
    <p>Have a nice day.</p>
    <h1>Recent Blog Posts</h1>

    {data.allMarkdownRemark.edges.map(post => (
      <a href= {post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </a>
    ))}
    
    <p>Have a nice day.</p>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
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
