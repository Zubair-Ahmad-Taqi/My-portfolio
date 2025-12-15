//

"use client";

import React from "react";
import styled from "styled-components";
import aboutMeData from "../data/aboutMe.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: 'Exo 2', sans-serif;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #DDD3FF;
  font-weight: normal;
  font-family: 'Exo 2', sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #F2E9FF;
  line-height: 1.6;
  font-family: 'Exo 2', sans-serif;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
  a {
    color: #A78BFA;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Exo 2', sans-serif;
    &:hover {
      color: #DDD3FF;
      text-decoration: underline;
    }
  }
`;

export default function AboutMe() {
  const data = aboutMeData;

  return (
    <Container>
      <Title>{data.title}</Title>
      <Paragraph>{data.summary}</Paragraph>
      <Paragraph>{data.focus}</Paragraph>
      <Paragraph>{data.hobbies}</Paragraph>

      <ContactLinks>
        <a href={`mailto:${data.contact.email}`}>Email</a>
        <a href={data.contact.linkedin} target="_blank">LinkedIn</a>
        <a href={data.contact.github} target="_blank">GitHub</a>
        <a href={`tel:${data.contact.phone}`}>Phone</a>
        <a href="/resume.pdf" target="_blank">Resume</a>
      </ContactLinks>
    </Container>
  );
}
