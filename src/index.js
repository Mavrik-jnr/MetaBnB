import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Normalize } from "styled-normalize";
import { Boilerplate } from "./styled-components/Boilerplate.styles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Normalize />
      <Boilerplate />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
