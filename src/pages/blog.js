import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog Posts</h1>
    {data.recentMarkdownRemark.edges.map(post => (
      <PostPreview blogPost = {post}></PostPreview>
    ))}
  </Layout>
)

export default Blog

export const pageQuery = graphql`
  query IndexQuery {
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
