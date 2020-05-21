/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/

 * Theme Colors: https://paletton.com/#uid=53p1d0kGcl7qQxW-hreOreJWS6f
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";

// import Header from "./header"
// import "./layout.css"

import Container from 'react-bootstrap/Container';

// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/theme.css';
import '../css/main.scss';

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Container fluid className="main-container">

        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()} Dale Larsen, Built with
          {` `}
          <a href="https://reactjs.org/">ReactJS</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          , Hosted on <a href="https://www.netlify.com/">Netlify</a>
        </footer>

      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
