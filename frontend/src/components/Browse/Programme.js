import react from "react";
import styled, { css } from "styled-components";
import IconHeart from "../../images/Icon-Heart.svg";

const Container = styled.div`
  width: 37.5rem;
  height: 21.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.beige};
  margin-bottom: 2rem;
  display: flex;
  font-size: ${(props) => props.theme.fontSize.h2};
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  align-self: flex-start;
`;

const Programm = (props) => {
  return (
    <Container>
      <div>
        <Icon src={IconHeart} alt="Icon Heart" />
      </div>
      <h2>{props.title}</h2>
    </Container>
  );
};

export default Programm;
