'use client';

import Image from "next/image";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "./assets/img/color-sharp.png";
import projImg2 from "./assets/img/color-sharp2.png";
import projImg3 from "./assets/img/banner-bg.png";
import colorSharp2 from "./assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Alison",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      id: 2,
      title: "CabinetKine",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      id: 3,
      title: "Application Mobile",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      id: 4,
      title: "",
      description: "",
      imgUrl: projImg1,
    },
    {
      id: 5,
      title: "",
      description: "",
      imgUrl: projImg2,
    },
    {
      id: 3,
      title: "",
      description: "",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="animate__animated animate__fadeIn">
              <h2>Projects</h2>
              <p>Découvrez les projets sur lesquels j’ai travaillé ainsi que ceux actuellement en cours de développement.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              projectId={project.id}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Arrive bientôt</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Arrive bientôt</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <Image className="background-image-right" src={colorSharp2} alt="background graphic" />
    </section>
  )
}