import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
