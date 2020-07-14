import React from "react"
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap"

function WideScreen({blogPost}) {
  return (
  <a href={blogPost.node.frontmatter.path}>
    <Card
      style={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div class="row no-gutters">
        <div class="col-auto" style={{ width: "35%", height: "200px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="code"
            src={require("../images/codeBG.jpg")}
          />
        </div>
        <div class="col">
          <CardBody>
            <CardTitle>
              <h2>{blogPost.node.frontmatter.title}</h2>
            </CardTitle>
            <CardSubtitle>{blogPost.node.frontmatter.date}</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </div>
      </div>
    </Card>
  </a>);
}

function NarrowScreen({blogPost}) {
  return (<a href={blogPost.node.frontmatter.path}>
    <Card
      style={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
          <CardBody>
            <CardTitle>
              <h2>{blogPost.node.frontmatter.title}</h2>
            </CardTitle>
            <CardSubtitle>{blogPost.node.frontmatter.date}</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
    </Card>
  </a>);
}

function BlogPreviewCard({blogPost}) {
  if (window.innerWidth > 750) {
    return <WideScreen blogPost={blogPost} />
  }
  return <NarrowScreen blogPost={blogPost} />
}

const PostPreview = ({ blogPost }) => (
  <BlogPreviewCard blogPost={blogPost} />
)

export default PostPreview
