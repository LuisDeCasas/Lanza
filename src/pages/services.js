import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "react-bootstrap"
import ServiceTile from "../components/ServiceTile"
import { servicesMap } from "../util/servicesUtil"

const Services = () => {
  const services = servicesMap.map(({ icon, title, description }) => (
    <Col xs={6} md={4} className="py-5 text-center ">
      <ServiceTile icon={icon} title={title} description={description} />
    </Col>
  ))
  return (
    <Layout>
      <SEO title="Services" />
      <Row>{services}</Row>
    </Layout>
  )
}

export default Services
