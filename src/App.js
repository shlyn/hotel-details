import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import img from "./images/background.png";

function App() {
  return (
    <Body>
      <Header />
      <Main />
      <div />
      <BackgroundImage />
    </Body>
  );
}

export default App;

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10% 90%;
  grid-auto-rows: minmax(100px, auto);
`;

const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-image: url(${img});
  background-size: cover;
  z-index: -1;
`;
