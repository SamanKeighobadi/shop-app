import React from "react";
//? React Semantic UI Components
import { Container, Icon } from "semantic-ui-react";

const PageNotFound = () => {
  return (
    <Container textAlign="center">
      <div className='page-container'>
        <h1>
          PageNotFound 404 <Icon name="exclamation" />
        </h1>
      </div>
    </Container>
  );
};

export default PageNotFound;
