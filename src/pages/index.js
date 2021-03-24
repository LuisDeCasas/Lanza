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
        <Carousel.Item style={{backgroundImage: `url()`}}>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="First slide" />
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
