import React from "react"
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap"

const PostPreview = ({ blogPost }) => (
  <div class="container" >
    <a href={blogPost.node.frontmatter.path}>
      <Card style={{ width: "100%" }}>
        <div class="row no-gutters" >
          <div class="col-auto" style={{ width: "35%", height: "200px"}}>
            <img style = {{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
              alt="code"
              src={require("../images/codeBG.jpg")}
            />
          </div>
          <div class="col" >
            <CardBody>
              <CardTitle>
                <h2>{blogPost.node.frontmatter.title}</h2>
              </CardTitle>
              <CardSubtitle>11-07-2020</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </div>
        </div>
      </Card>
    </a>
  </div>
)

export default PostPreview
