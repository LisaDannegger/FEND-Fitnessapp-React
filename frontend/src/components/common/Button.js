import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  color: white;
  background: ${(props) => props.theme.colors.darkBlue};
  border-radius: 5rem;
  border: none;
  padding: 1.5rem 2rem;
  font-size: ${(props) => props.theme.text.medium};
`;

const Button = ({ children }) => {
  return <ButtonStyles>{children}</ButtonStyles>;
};

export default Button;
