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
import { Row } from 'react-bootstrap';

import ProjectItem from './projectItem';

import './projects.scss';

export default function ProjectItems() {//use this instead: https://www.gatsbyjs.org/packages/gatsby-transformer-json/

    const data = useStaticQuery(graphql`
            query ProjectItemsQuery {
                allItemsJson(sort: {order: ASC, fields: order})  {
                    edges {
                        node {
                            name
                            description
                            images
                            code
                            tech {
                                be
                                fe
                            }
                        }
                    }
                }
                
                allFile(filter: {sourceInstanceName: {eq: "projectImages"}}) {
                    edges {
                        node {
                            name
                            childImageSharp {
                                fluid(maxWidth: 1080, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                  
            }

        `);

    // console.log(data);

    function extractItemImg(imgNames) {
        if (imgNames) {
            return data.allFile.edges.filter((o) => {
                return imgNames.includes(o.node.name);
            });
        }
    }

    return (
        <div>
            <Row className="justify-content-md-center">
                {data.allItemsJson.edges.map(p => {

                    return (
                        <ProjectItem key={p.node.name} item={p.node} imgs={extractItemImg(p.node.images)} />
                    )
                })
                }

            </Row>

        </div>
    )
}

// eegchat1: file(relativePath: { eq: "eegchat1.jpg" }) {
//     childImageSharp {
//         fluid(maxWidth: 350) {
//             ...GatsbyImageSharpFluid
//         }
//     }
// }