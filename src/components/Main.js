import React from "react";
import styled from "styled-components";
import Hotel from "../hotelexterior.jpg";
import Menu from "./Menu";

const Main = () => {
  return (
    <Container>
      <Info>
        <Image src={Hotel} alt="Hotel" />
        <Description>
          <Header>Hilton Chicago</Header>
          <p>
            720 South Michigan Avenue <br /> Chicago, Illinois, 6065
          </p>
          <PhoneNumber href="number">1-312-922-4400</PhoneNumber>
        </Description>
      </Info>
      <Menu />
    </Container>
  );
};

export default Main;

const Info = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(500px, 70% 30%));
  margin-top: 10%;
  height: 75%;
`;

const Description = styled.div`
  height: 80%;
  width: 80%;
  justify-self: center;
  color: white;
  font-size: 20px;
`;
const Header = styled.p`
  font-weight: bold;
`;

const Image = styled.img`
  border: solid white 2px;
  justify-self: center;
  width: 80%;
`;

const PhoneNumber = styled.a`
  color: white;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));
`;
