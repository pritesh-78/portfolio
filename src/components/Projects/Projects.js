import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import photo from "../../Assets/Projects/photo.png";
import iNoteBook from "../../Assets/Projects/iNoteBook.png";
import NewsApp from "../../Assets/Projects/newsapp.png";
import cv from "../../Assets/Projects/cv.png";
import banglore from "../../Assets/Projects/banglore.jpg";
import COVID from "../../Assets/Projects/covid.png";
import powerBI from "../../Assets/Projects/powerbi.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNoteBook}
              isBlog={false}
              title="iNoteBook"
              description="iNoteBook is web app made using MERN stack to create , delete and update the personal notes by logging in with credentials which are authenticated using oAuth and JWTToken . personal made API is used to get and post the data."
              ghLink="https://github.com/pritesh-78/iNoteBook"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsApp}
              isBlog={false}
              title="NewsApp"
              description="This web app is made using concepts of API and react to fetch the data of daily latest news and categorise it by fields like science , health , sports etc and displyed it in presentable way."
              ghLink="https://github.com/pritesh-78/NewsApp"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banglore}
              isBlog={false}
              title="Banglore House Price Prediction"
              description="This is machine learning model made on raw data to predic the house price in banglore according to different attributes. Data proeprocessing is done before preparing the model. Different python libraries are used such as pandas, numPy, matplotlib, seaborn , sklearn etc. The model is saved using pickle.  "
              ghLink="https://github.com/pritesh-78/Banglore-House-Price-Prediction"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={COVID}
              isBlog={false}
              title="COVID Tracker"
              description="This dashboard is made using React js by fetching the data from the third party API to see the new cases , revoered cases and deaths everyday by countries . It shows the number wise ans also shows the circle with the diameter according to active cases , recoverd cases and deaths on the map too."
              ghLink="https://github.com/pritesh-78/COVID-Tracker"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photo}
              isBlog={false}
              title="TWB Gym Trainer Website"
              description="Using the concepts of bootstrap and the wordpress , i have made the custom personal traines website for the my very own personal trainer at gym. "
              ghLink="https://github.com/pritesh-78/TWB-gym-trainer-website"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cv}
              isBlog={false}
              title="Computer Vision"
              description="I have implemented the different functionality and different calculations on images to do changes in photo like cropping , making it tilted , rotating , making it black and white and make images do a lot of things using the OpenCV library of the python ."
              ghLink="https://github.com/pritesh-78/Computer-Vision"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerBI}
              isBlog={false}
              title="SuperStore Report Dashboard"
              description="Made creative and interacive and simple to understand dashboard for the superstore data using the microsoft's powerBI . Used the different charts and visuals and graphs so that is makes understand data easily. Give enough options for the filteration of the data."
              ghLink="https://github.com/pritesh-78/Superstore-Report-Dashboard"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
