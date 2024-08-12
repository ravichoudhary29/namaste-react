const heading = React.createElement(
  "h1", 
  {id:'heading',xyz:'abc'}, // attribute
  "Hello World from React!");  // children

console.log(heading);    // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// React.createElement ==> creates an object.
// the render method takes the object and render it on the DOM.