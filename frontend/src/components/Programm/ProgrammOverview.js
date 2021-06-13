import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { useQuery, gql } from "@apollo/client";

import Navigation from "../Navigation/Navigation";
import Button from "../common/Button";
import Day from "./Day";
// import CloseButton from "../common/X";
import BackButton from "../common/ArrowBack";

const OuterWrapper = styled.div``;

const Header = styled.div`
  height: 75vh;
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme.linearGradient.yellowRose};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProgrammTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.h1};
  width: 100%;
  margin: auto auto;
  text-align: center;
`;

const ProgrammDescription = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colors.beige};
`;

const Description = styled.p`
  padding: 3rem 3rem;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-size: ${(props) => props.theme.fontSize.p};
`;

const CrossButton = styled(Link)`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.h3};
  margin-bottom: 4rem;
`;
const ChartContainer = styled.div`
  width: 100%;
  height: 30rem;
  background-color: white;
  padding: 2rem 2rem;
`;

const OverView = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 2rem;
  background-color: ${(props) => props.theme.colors.beige};
`;

const FirstWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SecondWrapper = styled.div`
  margin-bottom: 5rem;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 1.5rem;
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RadioButton = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  text-align: center;
  background-color: ${(props) => props.theme.colors.beige};

  /* & :checked {
    background-color: ${(props) => props.theme.colors.darkBlue};
  } */
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.text.small};
  text-transform: uppercase;
  padding-top: 0.5rem;
`;

const ChartWrapper = styled.div`
  width: 16rem;
  height: 16rem;
`;

const ButtonBox = styled.div`
  left: 35%;
  position: fixed;
  margin-top: 80%;
`;

const LinkAll = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: ${(props) => props.theme.text.medium};
  margin-bottom: 1.5rem;
`;

const GETPROGRAM = gql`
  query {
    allProgram {
      _id
      title
      duration
      difficulty
      description
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

const Program = () => {
  const { loading, error, data } = useQuery(GETPROGRAM);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  const program = data.allProgram[0];

  return (
    <OuterWrapper>
      <Header>
        <CrossButton to="/browse">
          <BackButton />
        </CrossButton>
        <ProgrammTitle>{program.title}</ProgrammTitle>

        <ButtonBox>
          <Button as={Link} to="/workout">
            jetzt starten
          </Button>
        </ButtonBox>

        <List>
          <RadioBox>
            <RadioButton />
            <Text>Abnehmen</Text>
          </RadioBox>
          <RadioBox>
            <RadioButton />
            <Text>Leicht</Text>
          </RadioBox>

          <RadioBox>
            <RadioButton />
            <Text>6 Wochen</Text>
          </RadioBox>
        </List>
      </Header>

      <ProgrammDescription>
        <Description>{program.description}</Description>
      </ProgrammDescription>
      <ChartContainer>
        <Title>So ist das Programm aufgeteilt:</Title>
        <ChartWrapper>
          <PieChart
            // animation
            // animationDuration={500}
            // animationEasing="ease-out"

            data={[
              { title: "Krafttraining", value: 33, color: "#D2DDD0" },
              { title: "Cardio", value: 33, color: "#BBC8B9" },
              { title: "Koordination", value: 16.5, color: "#939C91" },
              { title: "Beweglichkeit", value: 16.5, color: "#7A8778" },
            ]}

            // labelPosition={50}
            // lengthAngle={360}
            // lineWidth={15}
            // paddingAngle={0}
            // radius={50}
            // rounded
            // startAngle={0}
            // viewBoxSize={[100, 100]}
          />
        </ChartWrapper>
      </ChartContainer>
      <OverView>
        <FirstWrapper>
          <Title>21 Tage</Title>
          <LinkAll>
            <Link to="/overview">Alle anzeigen</Link>
          </LinkAll>
        </FirstWrapper>
        <SecondWrapper>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <LinkAll>
            <Link to="/overview">Mehr anzeigen ...</Link>
          </LinkAll>
        </SecondWrapper>
      </OverView>
      <Navigation />
    </OuterWrapper>
  );
};

export default Program;
