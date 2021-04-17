import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon1 from "../images/Icon-Home.svg";
import Icon2 from "../images/Icon-Browse.svg";
import Icon3 from "../images/Icon-Profile.svg";

//Styles

const Nav = styled.nav`
  justify-content: center;
  background-color: #f5ebdd;
  font-family: "Roboto", sans-serif;

  a {
    text-transform: uppercase;
    text-decoration: none;
  }
  a:hover,
  a.active {
    ${"" /* color: #d5d5d5; */}
  }
`;

const Navbar = styled.ul`
  max-width: 800px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: auto;
  font-size: 1.5em;

  li {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Navbar>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/browse">BROWSE</NavLink>
        </li>
        <li>
          <NavLink to="/profile">PROFILE</NavLink>
        </li>
      </Navbar>
    </Nav>
  );
};

export default Navigation;
