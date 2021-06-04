import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Carousel, Col } from "react-bootstrap"
import carousel1 from "./../images/img2.jpeg"
import carousel2 from "./../images/img3.jpeg"
import carousel3 from "./../images/img4.jpeg"
import "./../styles/styles.scss"
import Services from "../pages/services"
import Towing from "../components/towing"
import MainInfoBar from "../components/MainInfo"
import ContactUS from "../components/ContactUS"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Row>
          <Carousel className="w-100">
            <Carousel.Item style={{ backgroundImage: `url(${carousel1})` }}>
              <Carousel.Caption>
                <h1>Lanza Transportation Towing Services</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ backgroundImage: `url(${carousel2})` }}>
              <Carousel.Caption>
                <h2>Second slide span</h2>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ backgroundImage: `url(${carousel3})` }}>
              <Carousel.Caption>
                <h3>Third slide span</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </section>
      <section className="main-row">
        <MainInfoBar />
      </section>
      <section>
        <ContactUS />
      </section>
      <section>
        <Row className="why-us">
          <Col
            className="image-section d-flex align-items-end justify-content-center d-none d-md-block"
            xs={12}
            md={6}
          >
            <div className="p-md-5 p-3">
              <p>
                Professional Staff and Fleet of Flat Bed and Wrecker Tow Trucks
              </p>
            </div>
          </Col>
          <Col className="content-section py-4" xs={12} md={6}>
            <div className="p-3">
              <div>
                <h2>
                  WHY <strong>CALL US</strong>
                </h2>
                <h3>LANZA TRANSPORTATION</h3>
              </div>
              <div className="py-2">
                <p>
                  We are sorry that you're stuck! We will do our best to get you
                  back on the road fast and happy again!
                </p>
                <p>
                  We provide fast, courteous and inexpensive towing services in
                  Tampa. We are fully insured and have been in business since
                  2010.
                </p>
                <p>
                  We are ready to respond to all your vehicle emergency needs 24
                  hours a day, seven days a week.
                </p>
              </div>
              <div>
                <ul className="mx-0 px-0">
                  <li>Excellent 5-Star Google Reviews</li>
                  <li>Short arrival time of 30 minutes or less</li>
                  <li>Honest competitive prices - zero hidden fees</li>
                  <li>Friendly and professional service</li>
                  <li>Available 24 hours a day, 7 days a week</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <Row className="services-section py-4">
          <Services />
        </Row>
      </section>
      <section>
        <Row className="pick-us parallax text-center">
          <Col>
            <h2>GOT JUNK CARS? WE'LL PAY MORE CASH FOR YOUR JUNK CAR!</h2>
            <h3>
              TITLE OR NO TITLE - FAST, FREE PICKUP - ANY MAKES &amp; MODELS
            </h3>
            <p>
              We'll pickup your junk car anywhere in Hillsborough County,
              Pinellas County, Pasco County, Hernando County and Polk County!
            </p>
          </Col>
        </Row>
      </section>
      <section className="container py-5">
        <Towing />
      </section>
      <section className="main-row">
        <MainInfoBar />
      </section>
      <section>
        <Row className="map"></Row>
      </section>
    </Layout>
  )
}

export default IndexPage
