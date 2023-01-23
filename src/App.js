import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import MyWork from "./components/myWork/MyWork";
import Skills from "./components/skills/Skills";
import Tips from "./components/tips/Tips";
import Layout from "./components/layout/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "mywork", element: <MyWork /> },
        { path: "skills", element: <Skills /> },
        { path: "tips", element: <Tips /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
