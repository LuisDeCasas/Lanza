/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import Whatsapp from "./Whatsapp"
import logo from "../images/Logotipotexto.png"

import { Container, Row } from "react-bootstrap"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container fluid>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>

      <footer className="text-center bg-black">
        <Row className="py-3 text-center">
          <div className="col-12">
            <img src={logo} alt="Lanza Transportation" style={{ width: 100 }} />
          </div>
        </Row>
      </footer>
      <Whatsapp />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
