import React from "react";
import styled from "styled-components";
import image from "../../images/programme-large.svg";

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
// `;

const Bild = styled.img`
  margin: $
  /* width: 37.5rem;
  height: 21.4rem; */
`;

const ProgrammImage = (props) => {
  return <Bild src={image} alt={props.alt} />;
};

export default ProgrammImage;
