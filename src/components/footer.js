import React from "react"
import logo from "../images/logo_dark.png"

const Footer = () => (
    <footer style={style}>
        <div class="column" style = {{textAlign: "left"}}>
            <img src={logo} alt="" height={30} />
        </div>
        <div class="column" style = {{
            textAlign: "right",
            fontSize: "0.5em"}}>
            © {new Date().getFullYear()}, Tobias Duggan
        </div>
    </footer>
)

var style = {
    // font-family: "Lato","Avenir Next",Arial,sans-serif;
    backgroundColor: "#f1f1eb",
    color: "#2e2e17",
    fontSize: "1em",
    fontWeight: "300",
    lineHeight: "25px",
    paddingLeft: "1em",
    paddingRight: "1em",
    position: "relative",
    textAlign: "center",
};

export default Footer