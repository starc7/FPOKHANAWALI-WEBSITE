import React from 'react'
import Layout from '../components/LayoutComp/Layout';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Layout>
      <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Contact Us</h2>
          <p>
            For inquiries, please contact us via email or phone:
          </p>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </Col>
      </Row>
    </Container>

    </Layout>
  )
}

export default Contact;