import React from "react";
import ReactDOM from "react-dom/client";
import App, { b } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let x = <div>daas</div>; //jsx react create element
let y = React.createElement("div", null, "dass"); //react create element
console.log("x", x);
console.log("y", y);

root.render(<App />);
