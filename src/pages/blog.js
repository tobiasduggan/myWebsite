import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"

const Blog  = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <PostPreview blogPost = {post}></PostPreview>
    ))}
  </Layout>
)

export default Blog

export const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 1000) {
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
