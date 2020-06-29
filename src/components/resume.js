// import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";
// import Typist from 'react-typist';
// import scrollToElement from "scroll-to-element";

//Images
// import Logo from '../../images/logo.png';

//React Bootstrap
// import Jumbotron from 'react-bootstrap/Jumbotron';
import { Row, Col } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';

export default function Resume() {//use this instead: https://www.gatsbyjs.org/packages/gatsby-transformer-json/

    const resumeQuery = useStaticQuery(graphql`
        query ResumeQuery {

            file(relativePath: {eq: "Dale-Larsen-Resume.pdf"}) {
                publicURL
                name
            }
              
        }

    `);

    return (
        <Row style={{marginTop: 60, textAlign: 'center'}}>
            <Col><h3><a href={resumeQuery.file.publicURL} download>Download My Resume <FaFileDownload /></a></h3></Col>
        </Row>
    )
}

// eegchat1: file(relativePath: { eq: "eegchat1.jpg" }) {
//     childImageSharp {
//         fluid(maxWidth: 350) {
//             ...GatsbyImageSharpFluid
//         }
//     }
// }