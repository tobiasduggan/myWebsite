import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import { graphql } from "gatsby"
import "../styles/index.scss"

const IndexPage = ({ data }) => (
  <div class="bg_image">
    <Layout>
      <SEO title="Home" />
      <div
        class="container"
        style={{
          maxWidth: "100%",
          marginBottom: "1.5rem",
          height: "30rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Welcome</h1>
      </div>
      <p>Welcome to my new website!</p>
      <p>Have a nice day.</p>
      <h1>Recent Posts</h1>

      
      {data.allMarkdownRemark.edges.map(post => (
        <div class="blog_preview" >
        <PostPreview blogPost={post}></PostPreview>
        </div>
      ))}
      

      <p>Have a nice day.</p>
    </Layout>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default IndexPage
