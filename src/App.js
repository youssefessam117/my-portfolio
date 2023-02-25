import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import MyWork from "./components/myWork/MyWork";
import Skills from "./components/skills/Skills";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "mywork", element: <MyWork /> },
        { path: "skills", element: <Skills /> },
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
