import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Home from "./components/Home/Home";
import About from "../src/components/About/About";
import Projects from "../src/components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { pageTitles } from "./routing/routing";
import { createGlobalStyle } from "styled-components";
import { Main } from "../src/components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState<string>(
    window.location.pathname
  );

  const GlobalStyles = createGlobalStyle`
    body {
      background-color: #b9b4b4;
      color: #0c0c0c;
    }
  `;

  useEffect(() => {
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/about",
      element: (
        <About>
          About me content: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iste fugiat sint quam. Officia temporibus, magni ea deleniti
          voluptatum a earum cum, aspernatur explicabo tempore omnis placeat,
          quas numquam reiciendis sapiente!
        </About>
      ),
    },
    {
      path: "/projects",
      element: <Projects></Projects>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/header",
      element: <Header></Header>,
    },
  ]);

  return (
    <Main>
      <>
        <Home
          isSelected={currentPage === "/"}
          onClick={() => {
            setCurrentPage("/");
            window.history.pushState(null, "", "/");
          }}
        >
          Home
        </Home>
        <nav>
          <Header
            isSelected={currentPage === "/header"}
            onClick={() => {
              setCurrentPage("/");
              window.history.pushState(null, "", "/");
            }}
          ></Header>

          <About
            isSelected={currentPage === "/about"}
            onClick={() => {
              setCurrentPage("/about");
              window.history.pushState(null, "", "/about");
            }}
          >
            About
          </About>

          <Projects
            isSelected={currentPage === "/projects"}
            onClick={() => {
              setCurrentPage("/projects");
              window.history.pushState(null, "", "/projects");
            }}
          >
            Projects
          </Projects>

          <Contact
            isSelected={currentPage === "/contact"}
            onClick={() => {
              setCurrentPage("/contact");
              window.history.pushState(null, "", "/contact");
            }}
          >
            Contact
          </Contact>
        </nav>
      </>

      <RouterProvider router={router}></RouterProvider>

      <Footer />
      <GlobalStyles />
    </Main>
  );
}

export default App;
