import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgrammImage from "../common/Programm-Image";
import Navigation from "../Navigation/Navigation";
import { DayTime } from "../common/DayTime";
import { GetUserName } from "../common/GetUserName";
import { useQuery, gql } from "@apollo/client";

const WelcomeTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1};
  text-align: left;
  color: ${(props) => props.theme.colors.darkBlue};
  line-height: 43.88px;
  margin-top: 7rem;
`;

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
  padding-top: 0.4rem;
`;

const WorkoutSubtitle = styled.p`
  font-size: ${(props) => props.theme.text.medium};
  padding-top: 0.4rem;
  margin-bottom: 10rem;
`;

const TrainingsLink = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: ${(props) => props.theme.text.medium};
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.div`
  margin: ${(props) => props.theme.margin.mobile};
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const DATAEXCHANGE = gql`
  query {
    allProgram(limit: 1) {
      _id
      title
      workouts {
        _key
        day
        Workout {
          _id
          title
          calories
          duration
          categories
        }
      }
    }
  }
`;

function Dashboard() {
  const { loading, error, data } = useQuery(DATAEXCHANGE); //dadurch bekommt apollo die query mit
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  const program = data.allProgram[0];
  const { calories, categories, duration } = program.workouts[0].Workout;

  const categoryString = categories.join(", ");

  return (
    <Wrapper>
      <WelcomeTitle>
        Guten
        <DayTime />
        <GetUserName username="Lisa" />
      </WelcomeTitle>

      <InnerWrapper>
        <WorkoutHeader>Dein Workout heute</WorkoutHeader>
        <TrainingsLink>
          <Link to="/trainingsplan">Trainingsplan</Link>
        </TrainingsLink>
      </InnerWrapper>
      <div>
        <ProgrammImage alt="Programm Image" />
      </div>

      <WorkoutTitle>{program.workouts[0].Workout.title}</WorkoutTitle>
      <WorkoutTitle>{program.title}</WorkoutTitle>
      <WorkoutSubtitle>
        {`${calories}kcal - ${duration}Min. - ${categoryString}`}
      </WorkoutSubtitle>

      <Navigation />
    </Wrapper>
  );
}

export default Dashboard;
