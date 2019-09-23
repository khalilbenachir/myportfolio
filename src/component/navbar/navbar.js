import React from "react";
import Logo from "../../assets/logo.png";

import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.css";

import './navbar.css'


const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt="khalil benachir"
          src={Logo}
          width="20"
          height="35"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink  className="inactive" activeClassName="active" to="/aboutme">About me</NavLink>
          <NavLink className="inactive" activeClassName="active" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
