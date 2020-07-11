import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo_dark.png"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const Header = ({ siteTitle, menuLinks }) => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="" height={100} />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="blog">Blog</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
