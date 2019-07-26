import React from "react";
import styled from "styled-components";
import Logo from "../HI_mk_logo_hiltonbrandlogo_3.jpg";

const Header = () => {
  return (
    <Container>
      <Button>
        <i class="fas fa-chevron-left" /> Back
      </Button>
      <Title> Hotel Details</Title>
      <LogoImage src={Logo} alt="Logo" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  text-align: center;
  background: #1d1d1d;
  color: white;
  font-size: 20px;
  width: 100%;
  height: 75px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  -webkit-box-shadow: 0px 3px 7px -1px #3d424a;
  -moz-box-shadow: 0px 3px 7px -1px #3d424a;
  box-shadow: 0px 3px 7px -1px #3d424a;
  @media (max-width: 850px) {
    height: 50px;
  }
`;

const Button = styled.button`
  align-self: center;
  justify-self: left;
  background: ${props => props.theme.darkGradient};
  border-radius: 5px;
  box-shadow: 0 6px 15px -4px black;
  color: white;
  border: solid 1px #3d424a;
  font-size: 20px;
  margin-left: 5%;
  font-weight: bold;
  @media (max-width: 850px) {
    font-size: 15px;
  }
  padding: 10px 15px;
`;

const Title = styled.div`
  max-height: 100%;
  width: 100%;
  align-self: center;
  justify-self: center;
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const LogoImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: scale-down;
  align-self: center;
  justify-self: right;
  margin-right: 5%;
`;
