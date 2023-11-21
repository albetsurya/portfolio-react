import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Visualgram-instagram-clone.png";
import projImg2 from "../assets/img/Hasta coffee.jpg";
import projImg3 from "../assets/img/Personal Portfolio.png";
import projImg4 from "../assets/img/React-Portfolio.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {
  const projects = [
    {
      title: "Visualgram - Instagram clone",
      description: "Javascript, React Js, Tailwind CSS",
      imgUrl: projImg1,
    },
    {
      title: "Hasta Coffee",
      description: "Javascript, React Js, Vite, Bootstrap",
      imgUrl: projImg2,
    },
    {
      title: "Simple Portfolio",
      description: "HTML, CSS, Javascript",
      imgUrl: projImg3,
    },
    {
      title: "React Portfolio",
      description: "Javascript, React Js, Vite, Bootstrap",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    During my career as a web developer, I have contributed to
                    projects for IC layout design automation and GIS
                    applications.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {/* Project 2 */}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {/* Project 3 */}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
