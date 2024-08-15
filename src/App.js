import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  console.log(Body());
  return (
    <article className="app">
      <Header />
      <Body />
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
