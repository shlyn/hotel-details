import React, { useState } from "react";
import styled from "styled-components";
import Section from "./Section";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("Map");
  return (
    <Container>
      <Section
        title="Map"
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Section
        title="Photo gallery"
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Section
        title="Amenities"
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  width: 80%;
  margin-top: 5%;
  @media (min-width: 1000px) {
    margin-top: 10%;
  }
  justify-self: center;
  margin-bottom: 20px;
`;
