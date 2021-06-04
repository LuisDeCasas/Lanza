import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row } from "react-bootstrap"
import ContactUS from "../components/ContactUS"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Row>
        <ContactUS />{" "}
      </Row>
    </Layout>
  )
}

export default Contact
