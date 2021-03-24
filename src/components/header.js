import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar expand="lg" fixed="top">
    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/">Services</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/">Another action</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/">Something</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item><a href="tel:4492281255">Contact Us</a></Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
