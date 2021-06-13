import React from "react";
import styled from "styled-components";
import Back from "../../images/back_Button.png";

const ArrowButton = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const BackButton = (props) => {
  return <ArrowButton src={Back} alt={props.alt} />;
};

export default BackButton;
