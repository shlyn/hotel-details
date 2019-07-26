import React from "react";
import styled from "styled-components";
import Maps from "../images/Maps.png";
import Gallery from "../images/Gallery.png";
import amenities from "../data/amenities";

const Section = ({ title, activeSection, setActiveSection }) => {
  return (
    <Container>
      <Header onClick={() => setActiveSection(title)}>
        <h1>{title}</h1>
        <h1>
          {" "}
          <i class="fas fa-chevron-right" />
        </h1>
      </Header>
      {activeSection === title && (
        <OptionsContainer>
          {activeSection === "Map" ? (
            <Image src={Maps} alt="Maps" />
          ) : activeSection === "Photo gallery" ? (
            <Image src={Gallery} alt="Gallery" />
          ) : (
            activeSection === "Amenities" && (
              <Amenities>
                {amenities.map(data => (
                  <li>{data}</li>
                ))}
              </Amenities>
            )
          )}
        </OptionsContainer>
      )}
    </Container>
  );
};

export default Section;

const Container = styled.div`
  background: ${props => props.theme.white};
  border-radius: 5px;
  box-shadow: 0 6px 15px -4px black;
`;

const Header = styled.button`
  width: 100%;
  background: ${props => props.theme.lightGradient};
  box-shadow: 0 2px 4px -4px #3d424a;
  color: ${props => props.theme.darkBlue};
  outline: none;
  font-size: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;

const OptionsContainer = styled.div`
  justify-items: center;
  height: 250px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  align-self: center;
`;

const Amenities = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 50%));
  align-items: center;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;
