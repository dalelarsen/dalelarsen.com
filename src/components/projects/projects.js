import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
import Typist from 'react-typist';
import scrollToElement from "scroll-to-element";

//Images
// import Logo from '../../images/logo.png';

//React Bootstrap
// import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';

//Icons
import { FaJsSquare, FaAngular, FaReact, FaJava, FaCss3Alt, FaNodeJs, FaHtml5, FaAws, FaAdobe, FaVuejs, FaCode, FaGitAlt, FaCodeBranch, FaNpm, FaPhp, FaLinux } from 'react-icons/fa';
import { DiJqueryLogo, DiPhotoshop, DiMongodb, DiFirebase, DiScrum } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { IoLogoIonic } from 'react-icons/io';
import { Icon, InlineIcon } from '@iconify/react';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';

import './projects.scss';

class Stack extends React.Component {

  render() {

    return (

      <Container fluid className="projects-container" >
        <Container id="projects">
          <Row>
            <Col>
              <h2>Projects</h2>
            </Col>
          </Row>
          
          
        </Container>
      </Container>

    );
  }
}

export default Stack;
