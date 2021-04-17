import React from "react";
import styled from "styled-components";
import image from "../images/programme-large.svg";

const Bild = styled.img`
  padding: 0 2.2rem;
  margin-top: 9rem;
`;

const ProgrammImage = () => {
  return <Bild src={image} alt="Programm Image" />;
};

export default ProgrammImage;
