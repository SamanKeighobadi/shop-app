import React from "react";
import { Link } from "react-router-dom";
//? React Semantic UI Components
import { Container, Button } from "semantic-ui-react";

const PageNotFound = () => {
  return (
    <Container textAlign="center">
      <div className="page-container">
        <h1>
          PageNotFound 404 
        </h1>
        <Link to="/">
          <Button  color="violet">
            Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default PageNotFound;
