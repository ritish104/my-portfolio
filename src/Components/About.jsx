
import React from "react";


import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";


const description =
  "I'm a B.sc student studed at Utkal University. I’ve built a solid foundation in web development, working with HTML, CSS, JavaScript, and modern libraries like React. I’ve gained hands-on experience through projects, learned to overcome challenges, and are now equipped to continue growing as a developer, contributing to real-world applications, and staying up-to-date with the latest technologies in the field.";


const skillsList = [
  "HTML, CSS, JavaScript,React.js",
  "Web design",
  "User experience",
  "Git/GitHub for version control",
  "Responsive design frameworks (e.g., Bootstrap, TailwindCSS)",
  "Basic graphic design tools like Figma"
 
];


const detailOrQuote =
  "I am passionate about creating responsive, visually appealing, and interactive user interfaces that enhance user experiences. I enjoy solving coding challenges, learning new technologies like React.js, and staying updated with the latest trends in web development. ";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 style={{color:"black",marginBottom:"2rem"}}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;