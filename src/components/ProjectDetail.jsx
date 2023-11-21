import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProjDetailCard } from "./ProjDetailCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Visualgram-instagram-clone.png";
import projImg2 from "../assets/img/Hasta coffee.jpg";
import projImg3 from "../assets/img/Personal Portfolio.png";
import projImg4 from "../assets/img/React-Portfolio.png";
import TrackVisibility from "react-on-screen";

export const ProjectDetail = () => {
  const projects = [
    {
      title: "Visualgram - Instagram clone",
      description:
        "Visualgram is a web application designed as a clone of Instagram, leveraging JavaScript, React.js, and Tailwind CSS. With a focus on delivering a visually engaging experience, the application allows users to seamlessly share images, connect with friends, and explore content interactively. The dynamic features are powered by JavaScript, ensuring real-time updates and smooth navigation. React.js structures the application for scalability, while Tailwind CSS streamlines styling for a cohesive and responsive design across various devices.",
      imgUrl: projImg1,
    },
    {
      title: "Hasta Coffee",
      description:
        "Hasta CoffeeShop is a full-stack web project that serves as an online coffee ordering platform. Developed using a robust tech stack including JavaScript, React.js, Vite, Express.js, Knex, PostgreSQL, Swagger, and Jest, this platform provides a seamless and efficient experience for users to browse, order, and manage their coffee preferences. The frontend, built with React.js and Vite, ensures a responsive and dynamic user interface, while the backend, powered by Express.js and Knex, manages data storage and retrieval using PostgreSQL. The integration of Swagger facilitates API documentation, and Jest is employed for testing, ensuring a reliable and well-performing online coffee ordering system.",
      imgUrl: projImg2,
    },
    {
      title: "Simple Portfolio",
      description:
        "Simple Portfolio Web, a personal showcase created using JavaScript, HTML, and Tailwind CSS, presents a clean and visually appealing display of an individual's professional accomplishments. With a focus on dynamic interactivity, the website provides visitors with insights into the creator's projects, skills, and contact details. Tailwind CSS ensures a responsive design, delivering a consistent and polished experience across different devices.",
      imgUrl: projImg3,
    },
    {
      title: "React Portfolio",
      description:
        "React Portfolio Web is a personal showcase website crafted with JavaScript, React.js, and Tailwind CSS to exhibit an individual's skills and projects. With a focus on a dynamic and modern user interface, the website provides an interactive space for visitors to explore the creator's portfolio. Leveraging the power of React.js and enhanced by the styling capabilities of Tailwind CSS, this portfolio ensures a visually appealing and responsive design for a seamless user experience.",
      imgUrl: projImg4,
    },
  ];
  return (
    <section className="project-details" id="projects-details">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Details of the Projects </h2>
                  <p>Below are the details of each project.</p>
                </div>
              )}
            </TrackVisibility>

            <Row>
              {projects.map((project, index) => {
                return <ProjDetailCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
