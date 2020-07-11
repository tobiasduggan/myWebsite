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
    bottom: "0",
    height: "60px",
    width: "100%",
    margin: "0"
};

export default Footer