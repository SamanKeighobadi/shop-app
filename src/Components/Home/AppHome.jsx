import React from "react";
//? React Semantic UI Components
import { Header, Container, Segment } from "semantic-ui-react";
import AppSlider from "../utils/AppSlider";

const AppHome = () => {
  return (
    <Container fluid textAlign="center">
      {/* <Segment placeholder>
        <Header content="Home Page" size="huge" />
        <Container textAlign="justified" style={{ width: "30vw" }}>
          <p>
            Incididunt eiusmod laborum mollit velit velit est enim enim aliqua
            id ullamco magna. Magna sit laborum cupidatat cupidatat esse
            reprehenderit quis enim nostrud quis adipisicing ea. Incididunt
            eiusmod laborum mollit velit velit
          </p>
        </Container>
      </Segment> */}
      <AppSlider />
    </Container>
  );
};

export default AppHome;
