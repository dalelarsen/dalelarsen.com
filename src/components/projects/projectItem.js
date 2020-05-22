// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//React Bootstrap
// import Jumbotron from 'react-bootstrap/Jumbotron';
import { Col, Badge } from 'react-bootstrap';

//Icons
// import { FaJsSquare, FaAngular, FaReact, FaJava, FaCss3Alt, FaNodeJs, FaHtml5, FaAws, FaAdobe, FaVuejs, FaCode, FaGitAlt, FaCodeBranch, FaNpm, FaPhp, FaLinux } from 'react-icons/fa';
// import { DiJqueryLogo, DiPhotoshop, DiMongodb, DiFirebase, DiScrum } from 'react-icons/di';
// import { GrMysql } from 'react-icons/gr';
// import { IoLogoIonic } from 'react-icons/io';
// import { Icon, InlineIcon } from '@iconify/react';
// import typescriptIcon from '@iconify/icons-logos/typescript-icon';

class ProjectItem extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {

    const item = this.props.item;
    const imgs = this.props.imgs;

    // console.log('imgs', imgs);

    return (

      <Col xs={12} sm={6} md={6} className="project-col">

        <h4>{item.name}</h4>

        {imgs && imgs.length > 0 ? (
          <Img fluid={imgs[0].node.childImageSharp.fluid} />
        ) : null}

        <p>{item.description}</p>

        {item.code ? (
          <div class="tech-row"><span>Code: </span><a href={item.code}>{item.code}</a></div>
        ) : null}

        <div class="tech-row">
          <span>Front End:</span>
          {item.tech && item.tech.fe && item.tech.fe.length > 0 ? (

            item.tech.fe.map(tech => {

              return (
                <Badge pill variant="secondary">{tech}</Badge>
              )
            })

          ) : null}

        </div>

        <div class="tech-row">
          <span>Back End:</span>
          {item.tech && item.tech.be && item.tech.be.length > 0 ? (


            item.tech.be.map(tech => {

              return (
                <Badge pill variant="secondary">{tech}</Badge>
              )
            })

          ) : null}

        </div>

      </Col >

    );
  }
}

export default ProjectItem;
