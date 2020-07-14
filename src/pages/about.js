import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '@fortawesome/fontawesome-free/css/all.min.css';

const SecondPage = () => (
  <div
    class="bg_image"
    style={{
      color: "white",
    }}
  >
    <Layout>
      <SEO title="About" />
      <h1 style={{
          marginBottom: "10vh",
        }}>About me</h1>
      <img
        style={{
          marginTop: "10px",
          marginRight: "10px",
          maxWidth: "40%",
        }}
        alt="me"
        src={require("../images/myFace.jpg")}
        align="left"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div class="container-fluid text-center" id="social-buttons">
        <div class="row">
          <div class="col-md-3 col-sm-6" style={{
            fontSize: "15vh"
          }}>
            <a
              title="Follow me on Twitter"
              href="https://twitter.com/tobiasduggan1"
              class="fab fa-twitter"
            >
            </a>
          </div>
          <div class="col-md-3 col-sm-6" style={{
            fontSize: "15vh"
          }}>
            <a
              title="Follow me on Instagram"
              href="https://www.instagram.com/tobiasduggan"
              class="fab fa-instagram"
            >
            </a>
          </div>
          <div class="col-md-3 col-sm-6" style={{
            fontSize: "15vh"
          }}>
            <a
              title="View my LinkedIn Profile"
              href="//www.linkedin.com/in/tobiasduggan"
              class="fab fa-linkedin"
            >
            </a>
          </div>
          <div class="col-md-3 col-sm-6" style={{
            fontSize: "15vh"
          }}>
            <a
              title="View my Github Profile"
              href="//github.com/tobiasduggan"
              class="fab fa-github"
            >
            </a>
          </div>
        </div>
      </div>
    </Layout>
  </div>
)

export default SecondPage
