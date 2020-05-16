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
import { FaJsSquare, FaAngular, FaReact, FaJava, FaCss3Alt, FaNodeJs, FaHtml5, FaAws, FaAdobe, FaVuejs, FaCode, FaGitAlt, FaCodeBranch, FaNpm, FaPhp, FaLinux, FaBootstrap, FaShopify } from 'react-icons/fa';
import { DiJqueryLogo, DiPhotoshop, DiMongodb, DiFirebase, DiScrum } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { IoLogoIonic } from 'react-icons/io';
import { Icon, InlineIcon } from '@iconify/react';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';

import './stack.scss';

class Stack extends React.Component {

  render() {

    const tech = [{
      name: 'Javascript',
      icon: <FaJsSquare style={{ color: '#f7df1e' }} />,
      experienceYr: 2008
    }, {
      name: 'Angular',
      icon: <FaAngular style={{ color: '#dd0031' }} />,
      experienceYr: 2014
    }, {
      name: 'Java',
      icon: <FaJava className="java-icon" />,
      experienceYr: 2011
    }, {
      name: 'NodeJS',
      icon: <FaNodeJs style={{ color: '#8bc84c' }} />,
      experienceYr: 2016
    }, {
      name: 'CSS/CSS3',
      icon: <FaCss3Alt style={{ color: '#264de4' }} />,
      experienceYr: 2008
    }, {
      name: 'HTML/HTML5',
      icon: <FaHtml5 style={{ color: '#e54c22' }} />,
      experienceYr: 2008
    }, {
      name: 'Ionic',
      icon: <IoLogoIonic style={{ color: '#468bff' }} />,
      experienceYr: 2017
    }, {
      name: 'ReactJS',
      icon: <FaReact style={{ color: '#61dafb' }} />,
      experienceYr: 2018
    }, {
      name: 'Bootstrap',
      icon: <FaBootstrap style={{ color: '#543b78' }} />,
      experienceYr: 2014
    }, {
      name: 'TypeScript',
      icon: <Icon icon={typescriptIcon} />,
      experienceYr: 2016
    }, {
      name: 'AWS',
      icon: <FaAws style={{ color: '#ff9901' }} />,
      experienceYr: 2012
    }, {
      name: 'MySQL',
      icon: <GrMysql style={{ color: '#5d87a1' }} />,
      experienceYr: 2010
    }, {
      name: 'Firebase',
      icon: <DiFirebase style={{ color: '#f8a010' }} />,
      experienceYr: 2016
    }, {
      name: 'Linux',
      icon: <FaLinux style={{ color: '#000' }} />,
      experienceYr: 2013
    }, {
      name: 'MongoDB',
      icon: <DiMongodb style={{ color: '#10aa50' }} />,
      experienceYr: 2018
    }, {
      name: 'PHP',
      icon: <FaPhp style={{ color: '#777bb3' }} />,
      experienceYr: 2013
    }, {
      name: 'NPM',
      icon: <FaNpm style={{ color: '#cc3533' }} />,
      experienceYr: 2016
    }, {
      name: 'Photoshop',
      icon: <DiPhotoshop style={{ color: '#31c5f0' }} />,
      experienceYr: 2009
    }, {
      name: 'AdobeXD',
      icon: <FaAdobe style={{ color: '#ff21c0' }} />,
      experienceYr: 2018
    }, {
      name: 'VueJS',
      icon: <FaVuejs style={{ color: '#40b984' }} />,
      experienceYr: 2018
    }, {
      name: 'Shopify',
      icon: <FaShopify style={{ color: '#94bd46' }} />,
      experienceYr: 2018
    }, {
      name: 'jQuery',
      icon: <DiJqueryLogo style={{ color: '#0968ab' }} />,
      experienceYr: 2009
    }, {
      name: 'GIT',
      icon: <FaGitAlt style={{ color: '#f04f33' }} />,
      experienceYr: 2015
    }, {
      name: 'SVN',
      icon: <FaCodeBranch style={{ color: '#809cc9' }} />,
      experienceYr: 2009
    }, {
      name: 'Unit Testing',
      icon: <FaCode style={{ color: '#8d6748' }} />,
      experienceYr: 2017
    }, {
      name: 'Agile/SCRUM',
      icon: <DiScrum style={{ color: '#016cbb' }} />,
      experienceYr: 2013
    }];

    const proYears = new Date().getFullYear() - 2008;

    return (

      <Container fluid className="stack-container" >
        <Container id="stack">
          <Row>
            <Col>
              <h2>Skills</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            {/* <Row   xs={2} sm={3} md={4}> */}
            {tech.map(t => {
              return (
                <Col xs={6} sm={3} md={3} className="stack-col">

                  {t.icon}

                  {/* <FaJsSquare style={{color: t.color}} /> */}
                  <div className="skill-title">{t.name}</div>
                  <div>{new Date().getFullYear() - t.experienceYr} Years</div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>

    );
  }
}

export default Stack;
