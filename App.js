import React from "react";
import ReactDOM from "react-dom/client";

//creating an element using React

// const parent = React.createElement("h1", { id: "heading" }, "I am the parent");
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//creating a nested element child as well as siblings using arrays using React

{/* <div id="root">
  <div id="parent">
    <div id="child">
      <h1>I am an h1 tag</h1>
      <h2>I am an h2 tag</h2>
    </div>
  </div>
</div> */}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {key:"h1"}, "I am an h1 tag"),
    React.createElement("h2", {key:"h2"}, "I am an h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
