import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PostPreview = ({ blogPost }) => (
  <div>
    <a href={blogPost.node.frontmatter.path}>{blogPost.node.frontmatter.title}</a>
  </div>
)

export default PostPreview
