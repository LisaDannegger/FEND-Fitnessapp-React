import React from "react";
import styled, { css } from "styled-components";
import IconHeart from "../../images/Icon-Heart.svg";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const Container = styled.div`
  padding: 2rem;
  width: 37.5rem;
  height: 21.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.beige};
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSize.h2};
`;

const ProgrammLink = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 15%;
`;

const Icon = styled.img`
  text-align: left;
`;

const Hinweis = styled.p`
  margin: 0;
  width: 40vw;
  height: 2.18vh;
  text-align: right;
  font-size: ${(props) => props.theme.text.medium};
`;

const ProgrammHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Programm = ({ program }) => {
  return (
    <Container>
      <ProgrammHeader>
        <Icon src={IconHeart} alt="Icon Heart" />
        <Hinweis>Neu</Hinweis>
      </ProgrammHeader>

      <ProgrammLink>
        <Link to="/programm">
          <h2>{program.title}</h2>
        </Link>
      </ProgrammLink>
    </Container>
  );
};

export default Programm;
