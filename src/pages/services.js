import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Row } from 'react-bootstrap'
import { FaBeer } from 'react-icons/fa';

const SecondPage = () => {
    
return(
  <Layout>
    <SEO title="Services" />
    <Row>
        <Col><FaBeer/></Col>
        <Col></Col>
    </Row>
  </Layout>
)}

export default SecondPage
