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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Exploring. Learning. Developing.</h1>
      </div>
      <h1  style={{
        color: "white"
      }}>Recent Posts</h1>

      
      {data.allMarkdownRemark.edges.map(post => (
        <div class="blog_preview" >
        <PostPreview blogPost={post}></PostPreview>
        </div>
      ))}
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
