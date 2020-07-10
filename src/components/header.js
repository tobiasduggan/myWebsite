import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo_dark.png"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1rem 0rem`,
      }}
    >
      <div>
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            <h1
              style={{
                margin: 0,
                paddingRight: "50px",
              }}
            >
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <img src={logo} alt="" height={100} />
              </Link>
            </h1>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                  marginTop: `15px`,
                }}
              >
                <Link
                  style={{
                    color: `white`,
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                  }}
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
