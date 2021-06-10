import React from "react";
import Body from "./Main";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import "shared_library/dist/index.esm.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}
