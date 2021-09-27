import React from "react";
import Link from "next/link";
import styled from "styled-components";

// import Profile from "../assets/my-page.svg";

const Navbar = () => {
  return (
    <Nav>
      <Link className="logo" href="/">
        <a className="logo">LOGO</a>
      </Link>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/contact">
        <a>{/* <Profile /> */}</a>
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem;
  background-color: black;
  color: white;

  & > .logo {
    margin-right: auto;
  }

  & > a {
    cursor: pointer;
    margin-right: 10px;
  }
`;

const SLink = styled.a``;

export default Navbar;
