import React from "react";
import styled from "styled-components";
import X from "../../images/X_close.svg";

const xButton = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const CloseButton = (props) => {
  return <xButton src={X} alt={props.alt} />;
};

export default CloseButton;
