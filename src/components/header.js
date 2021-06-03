import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import logo from "../images/Logotipotexto.png"

const Header = ({ siteTitle }) => (
  <Navbar expand="md" fixed="top" variant="dark" className="nav justify-content-md-center m-auto px-0 px-md-3">
    <Navbar.Brand className="px-3" as={Link} to="/">
      <img src={logo} alt="Lanza Transportation" style={{ width: 100 }} />
    </Navbar.Brand>
    <Navbar.Toggle className="mx-3" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/services">
          Services
        </Nav.Link>
        <Nav.Link as={Link} to="tel:4492281255">
          <span>Contact Us</span>
        </Nav.Link>
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
