import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Work from "../components/work/work";
import Stack from "../components/stack/stack";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";


const IndexPage = () => (

  <Layout>

    <SEO title="Dale Larsen, Javascript Developer" />

    <Intro />

    <div className="below-fold">

      <About />

      <Work />

      <Stack />

      <Projects />

      <Contact />

    </div>

  </Layout>

)

export default IndexPage
