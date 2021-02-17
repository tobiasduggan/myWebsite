import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Card, CardBody, CardTitle } from "reactstrap"
import axios from "axios"

const MinecraftPage = () => (
  <div
    class="bg_image"
    style={{
      color: "white",
    }}
  >
    <Layout>
      <SEO title="Minecraft server" />
      <h1
        style={{
          marginBottom: "10vh",
        }}
      >
        Who's on the minecraft server right now?!
      </h1>

      <Card
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div class="row no-gutters">
          <div
            class="col-auto"
            style={{ width: "35%", height: "210px", verticalAlign: "middle" }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="code"
              src={require("../images/minecraft/brannan.jpg")}
            />
          </div>
          <div class="col">
            <CardBody>
              <CardTitle>
                <ServerStatus username="Sindrago"></ServerStatus>
              </CardTitle>
            </CardBody>
          </div>
        </div>
      </Card>

      <Card
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div class="row no-gutters">
          <div
            class="col-auto"
            style={{ width: "35%", height: "210px", verticalAlign: "middle" }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="code"
              src={require("../images/minecraft/toby.jpg")}
            />
          </div>
          <div class="col">
            <CardBody>
              <CardTitle>
                <ServerStatus username="ThetaDelta"></ServerStatus>
              </CardTitle>
            </CardBody>
          </div>
        </div>
      </Card>

      <Card
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div class="row no-gutters">
          <div
            class="col-auto"
            style={{ width: "35%", height: "210px", verticalAlign: "middle" }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="code"
              src={require("../images/minecraft/Joe.jpg")}
            />
          </div>
          <div class="col">
            <CardBody>
              <CardTitle>
                <ServerStatus username="RadikalJin"></ServerStatus>
              </CardTitle>
            </CardBody>
          </div>
        </div>
      </Card>

      <Card
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div class="row no-gutters">
          <div
            class="col-auto"
            style={{ width: "35%", height: "210px", verticalAlign: "middle" }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="code"
              src={require("../images/minecraft/mattbatt.jpg")}
            />
          </div>
          <div class="col">
            <CardBody>
              <CardTitle>
                <ServerStatus username="mattbattison"></ServerStatus>
              </CardTitle>
            </CardBody>
          </div>
        </div>
      </Card>

      <Card
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div class="row no-gutters">
          <div
            class="col-auto"
            style={{ width: "35%", height: "210px", verticalAlign: "middle" }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="code"
              src={require("../images/minecraft/jamiet.jpg")}
            />
          </div>
          <div class="col">
            <CardBody>
              <CardTitle>
                <ServerStatus username="waluigme"></ServerStatus>
              </CardTitle>
            </CardBody>
          </div>
        </div>
      </Card>

      <p>
        If you use any of this data to mess with the privacy of anyone on this
        page you will feel the full force of a collective huff powerful enough
        to give neighbouring grandmas a sense of unease not felt since the great
        war.
      </p>
    </Layout>
  </div>
)

function ServerStatus({ username }) {
  if (0) {
    return (
      <div>
        <h2>This guy sure is!</h2>
        <img
          style={{
            width: "100px",
            height: "100px",
          }}
          alt="code"
          src={require("../images/minecraft/bigTick.png")}
        />
      </div>
    )
  }
  return (
    <div>
      <h2>This is guy isn't (He's a dick)</h2>
      <img
        style={{
          width: "100px",
          height: "100px",
        }}
        alt="code"
        src={require("../images/minecraft/bigCross.png")}
      />
    </div>
  )}

  function callServer() {
    axios
    .get("https://api.mcsrvstat.us/2/145.239.252.26:25628")
    .then(function (response) {
      // handle success
      console.log(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
  }

export default MinecraftPage
