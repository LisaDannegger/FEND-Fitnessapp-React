import React from "react";
import Programm from "./Programme";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const Container = styled.div`
  padding: ${(props) => props.theme.margin.mobile};
  margin-bottom: 9.5rem;
`;

const BrowseTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h2};
  text-align: left;
  margin-top: 7.5rem;
  margin-bottom: 2.5rem;
`;

const Filter = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.7rem;
`;

const Browse = (props) => {
  return (
    <Container>
      <BrowseTitle>Browse</BrowseTitle>
      <Filter>Filter</Filter>
      <Programm title="Titel des Programms" />
      <Programm title="100 Sit-Ups Challenge" />
      <Programm title="100 Push-Up Challenge" />
      <Programm title="Title des Programms" />
      <Programm title="Title des Programms" />
      <Programm title="Title des Programms" />
      <Navigation />
    </Container>
  );
};

export default Browse;
