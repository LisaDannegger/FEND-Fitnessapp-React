import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon1 from "../../images/Icon-Home.svg";
import Icon2 from "../../images/Icon-Browse.svg";
import Icon3 from "../../images/Icon-Profile.svg";

//Styles

const Nav = styled.nav`
  justify-content: center;

  a {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.link};
  }
  a:hover,
  a.active {
    ${"" /* color: #d5d5d5; */}
  }
`;

const Navbar = styled.ul`
  background-color: ${(props) => props.theme.colors.beige};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  margin: auto;
  font-size: ${(props) => props.theme.fontSize.p};
  position: fixed;
  bottom: 0;
  left: 0;

  li {
    cursor: pointer;
    font-weight: ${(props) => props.theme.fontWeight.thin};
  }
`;

const Icon = styled.img`
  padding-bottom: 0.2rem;
  margin: auto;
  display: flex;
  align-items: center;
`;

const Navigation = () => {
  return (
    <Nav>
      <Navbar>
        <li>
          <Icon src={Icon1} alt="Icon 1" />
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <Icon src={Icon2} alt="Icon 2" />
          <NavLink to="/browse">BROWSE</NavLink>
        </li>
        <li>
          <Icon src={Icon3} alt="Icon 3" />
          <NavLink to="/profile">PROFILE</NavLink>
        </li>
      </Navbar>
    </Nav>
  );
};

export default Navigation;
