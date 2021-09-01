import React from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
