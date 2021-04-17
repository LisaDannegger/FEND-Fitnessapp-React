import React from "react";
import "./Dashboard.css";
import styled from "styled-components";
import ProgrammImage from "./Programm-Image";
// import Navigation from "./Navigation";
// import { BrowserRouter } as Router from "react-router-dom";

const Title = styled.h1`
  font-size: 3.6rem;
  text-align: left;
  color: #1d2a73;
  margin-top: 7rem;
  padding: 0 2.2rem;
`;

function Dashboard() {
  return (
    <div>
      <Title>
        Guten
        <br />
        Morgen,
        <br />
        Faulpelz!
      </Title>
      <p>Dein Workout heute:</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trainingsplan
      </a>
      <ProgrammImage />
      <p>Titel des Workouts</p>
      <p>Titel des Programms</p>
      <p>xxx kcal . 26 Min. . Beweglichkeit</p>
    </div>
  );
}

export default Dashboard;
