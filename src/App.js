import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./components/Contact";
import Body from "./components/Body";
import About from "./components/About";
import { Header } from "./components/Header";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <article className="app">
      <Header />
      <Body />
    </article>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
