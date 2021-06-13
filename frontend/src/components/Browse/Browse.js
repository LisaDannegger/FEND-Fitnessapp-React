import React from "react";
import Programm from "./Programme";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import { useQuery, gql } from "@apollo/client";

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

const GETPROGRAM = gql`
  query {
    allProgram {
      _id
      title
      slug {
        current
      }
    }
  }
`;

function Browse() {
  const { loading, error, data } = useQuery(GETPROGRAM);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  const programs = data.allProgram;

  return (
    <Container>
      <BrowseTitle>Browse</BrowseTitle>
      <Filter>Filter</Filter>
      <ul>
        {programs.map((program) => (
          <Programm key={program._id} program={program} />
        ))}

        {/* <Programm title="100 Sit-Ups Challenge" />
        <Programm title="100 Push-Up Challenge" />
        <Programm title="Title des Programms" />
        <Programm title="Title des Programms" />
        <Programm title="Title des Programms" /> */}
      </ul>
      <Navigation />
    </Container>
  );
}

export default Browse;
