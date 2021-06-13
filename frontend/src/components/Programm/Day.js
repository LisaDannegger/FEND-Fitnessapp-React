import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import LargePlay from "../../images/LargePlay.svg";
import IconHeart from "../../images/Icon-Heart.svg";

const Wrapper = styled.div`
  display: flex;
  height: 10rem;
  margin-bottom: 1.5rem;
`;

const MovieBox = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.beige};
  border: 1px solid white;
`;

const PlayButton = styled.img`
  height: 3rem;
  width: 3rem;
`;

const DayBox = styled.div`
  display: inline-block;
  height: 10rem;
  width: 100%;
  background-color: white;
  padding: 1.5rem 1.5rem;
`;

const WorkoutInformation = styled.p`
  font-size: ${(props) => props.theme.text.medium};
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.text.large};
`;

const Icon = styled.img`
  margin-top: 2.5rem;
`;

const DATAEXCHANGE = gql`
  query {
    allWorkout {
      title
      calories
      categories
    }
  }
`;

const Day = () => {
  const { loading, error, data } = useQuery(DATAEXCHANGE); //dadurch bekommt apollo die query mit

  return (
    <Wrapper>
      <MovieBox>
        <PlayButton src={LargePlay} />
      </MovieBox>
      <DayBox>
        <Text>Tag 1</Text>
        <WorkoutInformation>
          {loading ? "loading" : data.allWorkout[0].calories} kcal - 26 Min. -
          {loading ? "loading" : data.allWorkout[0].categories[0]}
        </WorkoutInformation>
        <Icon src={IconHeart} alt="Icon 1" />
      </DayBox>
    </Wrapper>
  );
};

export default Day;
