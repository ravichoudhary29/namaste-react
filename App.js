// creating a nested html structure using createElement.

{
  /* 
  <div id="parent">
    <div id="child">
      <h1>I am a h1 tag</h1>
    </div>
    <div id="child2">
      <h2>I am a h2 tag</h2>
    </div>
  </div> 
*/
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am a h1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "I am a h2 tag")
  ),
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// React.createElement ==> creates an object.
// the render method takes the object and render it on the DOM.
