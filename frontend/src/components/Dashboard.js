import React from "react";
import styled from "styled-components";
import ProgrammImage from "./Programm-Image";
// import Navigation from "./Navigation";
// import { BrowserRouter } as Router from "react-router-dom";

const Title = styled.h1`
  font-size: 3.6rem;
  text-align: left;
  color: #1d2a73;
  line-height: 43.88px;
  margin-top: 7rem;
  padding: 0 1.7rem;
`;

const ContentBox = styled.div`
  margin-top: 1rem;
  padding: 0 1.7rem;
  margin-bottom: 11rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const WorkoutHeader = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 29.2px;
  margin-top: 5rem;
  padding: 0 1.7rem;
  display: inline-block;
  margin: 5rem 0 1rem 0;
`;

const Link = styled.a`
  color: #1d2a73;
  text-decoration: none;
  padding-left: 1.5rem;
  font-size: 1.2rem;

  &:active {
    color: #1d2a73;
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
      <WorkoutHeader>Dein Workout heute:</WorkoutHeader>
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
