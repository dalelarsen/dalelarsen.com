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

          <h4>CEO</h4>
          <div><strong>Fabuso</strong> - Ogden, UT</div>
          <p>October 2017 to Present</p>
          <p>After 10 years as the CTO and Senior Web Developer of Fabuso, I took the reins of the company as CEO. I continued to fulfill my previous duties and started leading/running all the affairs of the company.</p>

          <h4>CTO/Senior Full Stack Developer</h4>
          <div><strong>Fabuso</strong> - Ogden, UT</div>
          <p>November 2007 to October 2017</p>
          <p>As CTO of Fabuso and the Senior Web Developer I led the development team. Fabuso is a web development company that provides ongoing outsourced web development to its clients.</p>
          <p>Oversaw the acquisition of new clients, managed the development team, and developed much of the software myself. Each new client involved building new custom software solutions, integrating 3rd party software, and migrating old systems to the corresponding replacements.</p>
          
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
