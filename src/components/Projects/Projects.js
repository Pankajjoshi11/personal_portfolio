import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Face from "../../Assets/Projects/Face.png"
import travelMate from "../../Assets/Projects/travelMate.png"

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
              imgPath={travelMate}
              isBlog={false}
              title="TravelMate"
              description="TravelMate is an AI-driven trip recommendation platform designed to provide personalized travel itineraries. By integrating Google Gemini's Generative AI API and Google Places API, the platform offers intelligent trip planning, location insights, and real-time recommendations to enhance the travel experience."
              ghLink="https://github.com/Pankajjoshi11/AI_itinerary_generator"
              demoLink="https://ai-itinerary-generator-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Authenticity"
              description="Authenticity is a full-stack AI-based content evaluation tool designed to verify the originality and quality of written text. It detects AI-generated content using RoBERTa, checks grammar through logistic regression and TF-IDF, validates summary coherence with K-Means clustering, and flags plagiarism using cosine similarity and MongoDB."
              ghLink="https://github.com/Pankajjoshi11/Authenticity_ai_detection_tool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Face}
              isBlog={false}
              title="Face Recognition Attendance Tool"
              description="A sophisticated face recognition tool built with React, TypeScript, and ShadCN on the frontend, seamlessly integrated with a Node.js backend and MongoDB for secure data management. This application leverages models from face-api.js to accurately recognize employee faces, automatically mark attendance, and display a comprehensive attendance history."
              ghLink="https://github.com/Pankajjoshi11/Face_Recognition"
              demoLink="https://face-recognition-lyart.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SaveTheDate"
              description="Welcome to SaveTheDate, a unique wedding booking platform connecting tourists and foreigners with the grandeur of Indian weddings. Experience the traditions, music, food, and vibrant culture that make Indian weddings unforgettable."
              ghLink="https://github.com/Pankajjoshi11/SaveTheDate_wedding"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Document Q&A RAG Assistant"
              description="An intelligent document question-answering system built with Streamlit that uses Retrieval-Augmented Generation (RAG) to provide accurate, context-aware answers from uploaded documents."
              ghLink="https://github.com/Pankajjoshi11/Document-Q-A-RAG-assistant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Walmart Retail Sales Analysis"
              description="A complete data-driven project that analyzes Walmart-style retail transactions, extracts actionable insights, and predicts customer satisfaction levels using machine learning. The project includes exploratory data analysis, feature engineering, data cleaning, class imbalance handling, and model building with a robust ML pipeline"
              ghLink="https://github.com/Pankajjoshi11/walmart_retail_analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
