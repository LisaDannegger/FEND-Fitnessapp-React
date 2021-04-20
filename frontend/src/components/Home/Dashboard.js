import React from "react";
import styled from "styled-components";
import ProgrammImage from "../common/Programm-Image";
// import Navigation from "./Navigation";
// import { BrowserRouter } as Router from "react-router-dom";

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1};
  text-align: left;
  color: ${(props) => props.theme.colors.darkBlue};
  line-height: 43.88px;
  margin-top: 7rem;
  padding: 0 1.7rem;
`;

const ContentBox = styled.div`
  margin-top: 1rem;
  padding: 0 1.7rem;
  margin-bottom: 11rem;
  font-size: ${(props) => props.theme.fontSize.p};
  font-weight: ${(props) => props.theme.fontWeight.thin};
  line-height: 1.5rem;
`;

const WorkoutHeader = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.h2};
  line-height: 29.2px;
  margin-top: 5rem;
  padding: 0 1.7rem;
  display: inline-block;
  margin: 5rem 0 1rem 0;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  padding-left: 1.5rem;
  font-size: 1.2rem;

  &:active {
  }
`;

function Dashboard(props) {
  return (
    <div>
      <Title>
        Guten
        <br />
        Morgen, {/*Function/ State Zeiterkennung Stephen Gryder*/}
        <br />
        {props.userName}
      </Title>
      <WorkoutHeader>Dein Workout heute</WorkoutHeader>
      <Link
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trainingsplan
      </Link>
      <ProgrammImage alt="Programm Image" />
      <ContentBox>
        <p>{props.workoutTitle}</p>
        <p>{props.programTitle}</p>
        <p>xxx kcal . 26 Min. . Beweglichkeit</p>
      </ContentBox>
    </div>
  );
}

export default Dashboard;
