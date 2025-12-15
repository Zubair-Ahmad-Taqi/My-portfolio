//

"use client";

import React from "react";
import styled from "styled-components";
import projectsData from "../data/projects.json";

// Container for all projects
const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

// Single project card
const ProjectCard = styled.div`
  background: rgba(124, 58, 237, 0.12);
  border-radius: 16px;
  padding: 1rem 1.5rem;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(124, 58, 237, 0.28);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(124, 58, 237, 0.45);
  }
`;

// Project title
const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #A78BFA;
  font-family: 'Exo 2', sans-serif;
`;

// Tech stack
const Tech = styled.p`
  margin: 0;
  font-size: 0.95rem;
  font-style: italic;
  color: #DDD3FF;
  font-family: 'Exo 2', sans-serif;
`;

// Description
const Description = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #F2E9FF;
  font-family: 'Exo 2', sans-serif;
`;

// (removed unused Links, LinkButton, ProjectImage)

export default function Projects() {
  return (
    <ProjectsList>
      {projectsData.map((project) => (
        <ProjectCard key={project.id}>
          <Title>{project.title}</Title>
          <Tech>{project.tech}</Tech>
          <Description>{project.description}</Description>
        </ProjectCard>
      ))}
    </ProjectsList>
  );
}
