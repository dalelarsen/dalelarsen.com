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

import './work.scss';

class Work extends React.Component {

  render() {

    const proYears = new Date().getFullYear() - 2008;

    return (

      <Container fluid className="work-container">
        <Container id="work">

          <h2>Work History</h2>

          <h4>CEO</h4>
          <div><strong>Fabuso</strong> - Ogden, UT</div>
          <p>October 2017 to Present</p>
          <p>After 10 years as the CTO and Senior Web Developer of Fabuso, I took the reins of the company as CEO. I continued to fulfill my previous duties and started leading/running all the affairs of the company.</p>

          <h4>CTO/Senior Full Stack Developer</h4>
          <div><strong>Fabuso</strong> - Ogden, UT</div>
          <p>November 2007 to October 2017</p>
          <p>I worked as CTO of Fabuso and was the Senior Developer. Fabuso is a web development company that provides ongoing outsourced web development to its clients. I have overseen the acquisition of new clients and have managed our development team, developing much of the software myself. Each new client involved building new custom software solutions, integrating 3rd party software, and migrating old systems to the corresponding replacements.</p>
          <p>I know how to architect web applications, reviewing each project and choosing frameworks and solutions that best fit each one. I have developed these from beginning to end and beyond.</p>
          <p>I have learned and developed skills in project/team management as well as many programming languages, frameworks, and libraries. I have primarily focused on Javascript as it has become more and more widely available as a viable solution on all platforms. I am proficient in Javascript and can work well with all the major frameworks including Angular, AngularJS, React, jQuery, and VueJS.</p>
          <p>I have developed several backends and APIs using Java and NodeJS with Express. I am experienced in SQL and NoSQL databases. I have also worked extensively with Firebase and its suite of developer solutions.</p>
          <p>I am self-motivated and have proven that I can deliver short and long term needs. I currently work in a co-working space where I have been thriving for years. I manage a remote developer team but have also managed in-house employees. I work very well in a remote environment.</p>

          <h4>Website Manager</h4>
          <div><strong>Achieve Auto Sales</strong> - Ogden, UT</div>
          <p>September 2002 to November 2005</p>
          <p>Maintained company website for car dealership. Kept up to date daily inventory on website and launched and managed eBay&reg; listings for the cars.</p>
          
        </Container>
      </Container>

    );
  }
}

export default Work;
