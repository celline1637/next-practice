import React, { useRef } from "react";
import HeadInfo from "./HeadInfo";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Layout;
