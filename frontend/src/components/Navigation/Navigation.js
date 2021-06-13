import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon1 from "../../images/Icon-Home.svg";
import Icon2 from "../../images/Icon-Browse.svg";
import Icon3 from "../../images/Icon-Profile.svg";

//import { ReactComponent as Homebutton } from "../icons/Home.svg";

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
  margin: auto;
  display: flex;
  align-items: center;
`;

const Navigation = () => {
  return (
    <Nav>
      <Navbar>
        <NavLink to="/dashboard" activeClassName="active">
          <Icon src={Icon1} alt="Icon 1" />
          Home
        </NavLink>
        <NavLink to="/browse" activeClassName="active">
          <Icon src={Icon2} alt="Icon 2" />
          BROWSE
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          <Icon src={Icon3} alt="Icon 3" />
          PROFILE
        </NavLink>
      </Navbar>
    </Nav>
  );
};

export default Navigation;
