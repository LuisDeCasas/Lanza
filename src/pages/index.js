import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Row, Carousel} from "react-bootstrap"
import carousel1 from './../images/img2.jpeg';
import carousel2 from './../images/img3.jpeg';
import carousel3 from './../images/img4.jpeg';
import "./../styles/styles.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Carousel className="w-100">
        <Carousel.Item style={{backgroundImage: `url(${carousel1})`}}>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{backgroundImage: `url(${carousel2})`}}>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{backgroundImage: `url(${carousel3})`}}>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  </Layout>
)

export default IndexPage
