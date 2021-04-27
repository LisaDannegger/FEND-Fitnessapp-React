import React from "react";
import styled from "styled-components";
import ProgrammImage from "../common/Programm-Image";
import Navigation from "../Navigation/Navigation";
// import { BrowserRouter } as Router from "react-router-dom";

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1};
  text-align: left;
  color: ${(props) => props.theme.colors.darkBlue};
  line-height: 43.88px;
  margin-top: 7rem;
`;

// const ContentBox = styled.div`
//   margin-top: 1rem;
//   padding: 0 1.7rem;
//   margin-bottom: 11rem;
//   font-size: ${(props) => props.theme.text.large};
//   font-weight: ${(props) => props.theme.fontWeight.thin};
//   line-height: 1.5rem;
// `;

const WorkoutHeader = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.h2};
  line-height: 29.2px;
  margin-top: 5rem;
  display: inline-block;
  margin: 5rem 0 1rem 0;
`;

const WorkoutTitle = styled.p`
  font-size: ${(props) => props.theme.text.large};
  padding-bottom: 0.5rem;
`;

const WorkoutSubtitle = styled.p`
  font-size: ${(props) => props.theme.text.small};
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 1.2rem;

  &:active {
  }
`;

const Wrapper = styled.div`
  margin: ${(props) => props.theme.margin.mobile};
`;

const WrapperUmbruch = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

function Dashboard() {
  return (
    <Wrapper>
      <WrapperUmbruch>
        <Title>
          Guten
         <br />
          Morgen,
          <br />
          Lisa
        </Title>
      </WrapperUmbruch>
      <WorkoutHeader>Dein Workout heute</WorkoutHeader>
      <Link
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trainingsplan
      </Link>
      <div>
        <ProgrammImage alt="Programm Image" />
      </div>

      <WorkoutTitle>Titel deines Workouts</WorkoutTitle>
      <WorkoutTitle>Titel deines Programms</WorkoutTitle>
      <WorkoutSubtitle>xxx kcal . 26 Min. . Beweglichkeit</WorkoutSubtitle>

      <Navigation />
    </Wrapper>
  );
}

export default Dashboard;

//ul
