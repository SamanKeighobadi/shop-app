import React, { Suspense } from "react";
//? React Semantic UI Components
import { Header, Container, Segment } from "semantic-ui-react";
//? Import React Helmet
import { Helmet } from "react-helmet";
//? Prop Types
import PorpTypes from "prop-types";
//? import components
const HomeProductList = React.lazy(() => import("./HomeProductList"));
const AppLoading = React.lazy(() => import("../common/AppLoading"));

const AppHome = ({ addToCart }) => {
  return (
    <Suspense fallback={<div><AppLoading /></div>}>
      <Container fluid textAlign="center">
        <Helmet>
          <title>Shop App</title>
        </Helmet>
        <Segment placeholder>
          <Header content="Home Page" size="huge" />
          <Container textAlign="justified" style={{ width: "30vw" }}>
            <p>
              Incididunt eiusmod laborum mollit velit velit est enim enim aliqua
              id ullamco magna. Magna sit laborum cupidatat cupidatat esse
              reprehenderit quis enim nostrud quis adipisicing ea. Incididunt
              eiusmod laborum mollit velit velit
            </p>
            
          </Container>
        </Segment>
        <HomeProductList addToCart={addToCart} />
      </Container>
    </Suspense>
  );
};

AppHome.propTypes = {
  addToCart: PorpTypes.func,
};

export default AppHome;
