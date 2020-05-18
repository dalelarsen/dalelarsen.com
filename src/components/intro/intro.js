// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import Typist from 'react-typist';
import scrollToElement from "scroll-to-element";

//Images
import Logo from '../../images/logo.png';

//React Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

//Icons
import { FaArrowDown } from 'react-icons/fa';

import './intro.scss';

class Intro extends React.Component {

  render() {

    return (
      <Jumbotron fluid className="intro">
        <Container>

          <div className="intro-middle">

            <img className="img-fluid intro-img" src={Logo} alt="logo" />

            <Typist stdTypingDelay={15}>

              <span>Hi!</span>

              <Typist.Backspace count={1} delay={1500} />

              <span>, I'm Dale Larsen.</span>

              <Typist.Delay ms={500} />

              <br />

              <span>I'm a Software Project Manager</span>
              <Typist.Delay ms={500} />

              <span>,<br /> Senior Full Stack Web Developer</span>
              <Typist.Delay ms={500} />

              <span>,<br /> Technology Business Leader.</span>

            </Typist>

          </div>

          <div className="more-down" onClick={() => scrollToElement('#about', {
            offset: -20,
            ease: 'in-out-quad',
            duration: 300
          })}>

            <Typist cursor={{ show: false }}>

              <Typist.Delay ms={12000} />
              <span>learn more</span>

            </Typist>

            <FaArrowDown />
          </div>

        </Container>
      </Jumbotron>
    );
  }
}

export default Intro;
