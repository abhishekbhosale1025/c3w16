import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export const Nav = styled.div`

height:100px;
width:100%;
background-color:lightgreen;
padding:30px;
display:flex ;
gap:20px;`



export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}

        <NavLink to="/Home" >Home</NavLink>
        <NavLink to="/About" >About</NavLink>
        <NavLink to="/Books" >Books</NavLink>
        <NavLink to="/Login" >Login</NavLink>
        
      </Nav>
    </>
  );
};
