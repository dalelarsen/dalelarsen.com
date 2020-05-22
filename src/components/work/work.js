// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
// import scrollToElement from "scroll-to-element";

//Images
// import Logo from '../../images/logo.png';

//React Bootstrap
// import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';

//Icons
// import { FaArrowDown } from 'react-icons/fa';

import './work.scss';

class Work extends React.Component {

  render() {

    return (

      <Container fluid className="work-container">
        <Container id="work">

          <h2>Work History</h2>

          <h4>Senior Software Development Manager</h4>
          <div><strong>Fabuso</strong> - Ogden, UT</div>
          <p>September 2015 to Present</p>
          <ul>
            <li>Led and ran all the development and technology business needs of the company.</li>
            <li>Oversaw the acquisition of new clients and managed our development team, developing much of the software myself.</li>
            <li>Each new client involved building new custom software solutions, integrating 3rd party software, and migrating old systems to the corresponding replacements.</li>
            <li>Continued to fulfill previous duties of Senior Web Developer.</li>
          </ul>

          <h4>Senior Full Stack Developer</h4>
          <div><strong>Fabuso</strong> - Ogden, UT</div>
          <p>November 2007 to September 2015</p>

          <ul>
            <li>Architected web applications, reviewing each project and choosing frameworks and solutions that best fit each one.</li>
            <li>Managed development projects.</li>
            <li>Built and maintained software according to client needs.</li>
          </ul>

          <h4>Website Manager</h4>
          <div><strong>Achieve Auto Sales</strong> - Ogden, UT</div>
          <p>September 2002 to November 2005</p>
          <ul>
            <li>Maintained company website for car dealership. Kept up to date daily inventory on website and launched and managed eBay&reg; listings for the cars.</li>
          </ul>

        </Container>
      </Container>

    );
  }
}

export default Work;
