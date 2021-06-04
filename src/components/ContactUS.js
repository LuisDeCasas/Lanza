import * as React from "react"
import { Row, Col, Button } from "react-bootstrap"

const ContactUS = () => (
  <Row className="contact-us parallax py-5 d-flex justify-content-center">
    <Col xs={12} md={6} className="text-center mb-5 mb-md-0">
      <h2>CHEAP TOWING IN TAMPA</h2>
      <h3>BEST PRICE &amp; FASTER ARRIVAL</h3>
      <div className="pt-5 pb-2 pb-md-5">
        <p>
          Since 2014 providing quality towing &amp; roadside assistance services
          in Tampa metropolitan area.
        </p>
        <p>You get better price and quality job done right.</p>
        <p>If you need towing service now:</p>
      </div>
      <a href="tel:18454015151">
        <Button variant="primary">Call Us - 845-401-5151</Button>
      </a>
    </Col>
    <Col xs={12} md={6} className="text-center mb-5 mb-md-0">
      <h2>TAMBIEN SERVICIO EN ESPAÑOL</h2>
      <h3>SERVICIO RAPIDO AL MEJOR PRECIO</h3>
      <div className="pt-5 pb-2 pb-md-5">
        <p>
          Thinking of selling your junk car?Get the most money for it! We'll
          pick it up free of charge today, anywhere in Tampa area.
        </p>
        <p>If you need towing service now,</p>
        <p>get a fast quote over the phone now:</p>
      </div>
      <a href="tel:18452346181">
        <Button variant="primary">Llama al - 845 234 6181</Button>
      </a>
    </Col>
  </Row>
)

export default ContactUS
