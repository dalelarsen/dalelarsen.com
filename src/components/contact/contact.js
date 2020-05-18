import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import Typist from 'react-typist';
import scrollToElement from "scroll-to-element";

//Images
// import Logo from '../../images/logo.png';

//React Bootstrap
// import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col, Button } from 'react-bootstrap';

//Icons
import { FaArrowDown } from 'react-icons/fa';

import './contact.scss';

class Contact extends React.Component {

  render() {

    return (

      <Container fluid className="contact-container">
        <Container id="contact">

          <Row className="justify-content-md-center">
            <Col xs={12} sm={12} md={6}>

              <h2 style={{marginBottom: 30}}>Contact Me</h2>

              <form name="contact" data-netlify-honeypot="bot-field" action="/contact-success" method="POST" data-netlify="true">

                <div className="hidden">
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </div>

                <input type="hidden" name="form-name" value="contact" />

                <div className="form-group">
                  <label htmlFor="contactName">Name</label>
                  <input type="text" name="name" className="form-control" id="contactName" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="emailAddress">Email address</label>
                  <input type="email" name="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                  <label htmlFor="messageInput">Message</label>
                  <textarea name="message" className="form-control" id="messageInput" rows="3"></textarea>
                </div>


                <button type="submit" className="btn btn-success btn-lg float-right mb-4">SEND</button>

              </form>

            </Col>
          </Row>

        </Container>
      </Container>

    );
  }
}

export default Contact;
