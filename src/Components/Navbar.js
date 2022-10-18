//Navbar code and links//
import React from "react";
import { FaCode } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>
            <FaCode size={30} />
          </h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/Aboutme">About me</NavLink>
          <NavLink to="/Skills">Skills</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
