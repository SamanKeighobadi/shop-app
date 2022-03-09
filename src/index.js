import React, { Suspense } from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import('./App'))

render(
  <Suspense fallback={<div/>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
