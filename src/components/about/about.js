// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import Typist from 'react-typist';
import scrollToElement from "scroll-to-element";

//Images
// import Logo from '../../images/logo.png';

//React Bootstrap
// import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Resume from '../resume';

//Icons
// import { FaArrowDown, FaBriefcase, FaListUl } from 'react-icons/fa';

import './about.scss';

class About extends React.Component {

  render() {



    const proYears = new Date().getFullYear() - 2008;

    return (

      <Container fluid className="about-container">
        <Container id="about">

          <h2>About Me</h2>
          <p style={{ fontStyle: 'italic', textAlign: 'center' }}>I lead, architect, manage, and build web applications and business technical solutions, and see them through to completion.</p>

          <h5>TLDR;</h5>
          <p>I am self-taught and have been running a web development company for over {proYears} years.</p>

          <Row>
            <Col xs={12} sm={4} className="about-btns"><Button variant="primary" size="lg" block onClick={() => scrollToElement('#work', {
              offset: -20,
              ease: 'in-out-quad',
              duration: 300
            })}>Work History</Button>{' '}</Col>

            <Col xs={12} sm={4} className="about-btns"><Button variant="info" size="lg" block onClick={() => scrollToElement('#stack', {
              offset: -20,
              ease: 'in-out-quad',
              duration: 300
            })}>Skills</Button>{' '}</Col>

            <Col xs={12} sm={4} className="about-btns"><Button variant="success" size="lg" block onClick={() => scrollToElement('#projects', {
              offset: -20,
              ease: 'in-out-quad',
              duration: 300
            })}>Projects</Button>{' '}</Col>
          </Row>

          <h5>From car dealership websites to large scale web applications...</h5>

          <p>At the age of 16 I learned HTML and began building/maintaining a website for a local car dealership.
            I also managed the dealership's eBay&reg; listings for all their cars.</p>

          <p>After I graduated high school, I decided to serve a 2 year service mission for The Church of Jesus Christ of Latter-Day Saints.
            I served in Portugal and learned the Portuguese language.</p>

          <p>Upon returning I set out to build a website creator.
          During this time I learned Java and Javascript, and everything else I needed to know, to build a tool that built websites.
          I finished building the entire website creator.
            During the recession we failed to launch, but this was my education.</p>

          <p>We transitioned into a web development company immediately, where I continued to learn and expand my skills. We brought on clients for whom we
            provided outsourced full-time development. Most of those companies were in the alternative healthcare industry.</p>

          <p>Over the course of {proYears} years I have led in-house and remote team members in building and managing the technology of our clients.
          I have been at the forefront of development and leading our team, keeping my technical and project management skills sharp.</p>

          <p>We built many large scale web applications including an in-house member management tool, an online training platform, a custom discussion board,
            payment platforms/integrations, and much more.</p>

          {/* <p>As the alternative healthcare industry is being heavily impacted by the effects of COVID-19, our clients have struggled,
            causing that they can no longer continue to hire our services. Facing this situation, I will now join a company that I can continue to grow with.</p> */}
            
          {/* <hr />

          <p>I know how to architect web applications, reviewing each project and choosing frameworks and solutions that best fit each one. I have developed these from beginning to end and beyond.</p>
          <p>I have learned and developed skills in project/team management as well as many programming languages, frameworks, and libraries. I have primarily focused on Javascript as it has become more and more widely available as a viable solution on all platforms. I am proficient in Javascript and can work well with all the major frameworks including Angular, AngularJS, React, jQuery, and VueJS.</p>
          <p>I have developed several backends and APIs using Java and NodeJS with Express. I am experienced in SQL and NoSQL databases. I have also worked extensively with Firebase and its suite of developer solutions.</p>
          <p>I am self-motivated and have proven that I can deliver short and long term needs. I currently work in a co-working space where I have been thriving for years. I manage a remote developer team but have also managed in-house employees. I work very well in a remote environment.</p> */}


          <Resume />

        </Container>
      </Container>

    );
  }
}

export default About;
