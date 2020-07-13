import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo_white.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = ({ siteTitle, menuLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="" height={"50em"} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="./about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./blog">Blog</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
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
