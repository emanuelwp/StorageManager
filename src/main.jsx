import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";
import { RouterProvider } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
html,
body {
  font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <React.StrictMode />
    <RouterProvider router={App} />
  </>
);
