

import React from "react";


import image from "../images/project.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Twitter clone ",
    description:
      " Completed a Twitter clone built with React, MongoDB, Firebase, and deployed for a smooth, full-stack experience! This project covers everything from real-time data management to secure authentication.",
    url: "https://twillerclone.netlify.app/",
  },
  {
    title: "Swiggy App",
    description:
      " Swiggy clone built with React.js! This project challenged me to recreate a dynamic, responsive food delivery platform from scratch. From seamless navigation to real-time updates, it’s all about delivering a smooth user experience.",
    url: "https://ritish-swiggy-app.netlify.app/",
  },
  {
    title: "Foodies-Pizza App",
    description:
      "Crafted a pizza website clone using only HTML, CSS, and Bootstrap to create a responsive and mouthwatering design! This project highlights the beauty of simplicity and the effectiveness of modern front-end tools.",
    url: "https://github.com/ritish104/Foodies-Pizza",
  },
  {
    title: "Better App",
    description:
      " This project streamlined task tracking, deadlines, and organization, showcasing the power of React for building efficient and user-friendly applications.",
    url: "https://ritish-better-app.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center",color:"black" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover",marginLeft:"8%" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;