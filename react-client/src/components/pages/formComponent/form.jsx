import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import style from './form.css';
import Fade from 'react-reveal/Fade';

class Forml extends Component {
  render() {
    return (
      <div id="formComponent">

        <Fade bottom>

          <Form id="myForm">
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="John Doe" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Subject</Form.Label>
                <Form.Control placeholder="Enter subject" />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Message</Form.Label>

              <Form.Control as="textarea" placeholder="Enter your message here" rows="5" />
            </Form.Group>

            <Button variant="primary" type="submit" size="lg" block >
              Send me a message (not working yet)
            </Button>
          </Form>
        </Fade>
      </div>

    )
  }
}

export default Forml;