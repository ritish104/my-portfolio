
import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./App.css";


const siteProps = {
  name: "Ritish Bhadra",
  title: "Frontend Developer",
  email: "ritishbhadra3@gmail.com",
  gitHub: "https://github.com/ritish104",
  instagram: "",
  linkedIn: "https://www.linkedin.com/in/ritish-bhadra-067007326/",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;