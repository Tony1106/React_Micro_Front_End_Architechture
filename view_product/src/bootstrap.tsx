import React from "react";
import ReactDOM from "react-dom";
import "shared_library/dist/index.esm.css";
const HelloWorld = () => {
  return <h1>Hello World</h1>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
