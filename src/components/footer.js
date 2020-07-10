import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo_dark.png"

const Footer = () => (
    <footer style={style}>
        <div class="column" style = {{textAlign: "left"}}>
            <img src={logo} alt="" height={30} />
        </div>
        <div class="column" style = {{textAlign: "right"}}>
            © {new Date().getFullYear()}, Tobias Duggan
        </div>
    </footer>
)

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

export default Footer