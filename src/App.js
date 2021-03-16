import React, { createContext, useEffect, useLayoutEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import FavoritePage from "./components/FavoritePage";
import LanguagePage from "./components/LanguagePage";
import MainApp from "./components/MainApp";
import Sidebar from "./components/Sidebar";

export const ThemeContext = createContext("");
export const SidebarHeight = "8vh";

export const pages = [
  {
    name: "About",
    to: "/about",
    bg: "red-grad-bg text-white",
    components: <AboutPage />,
  },
  {
    name: "Courses",
    to: "/courses",
    bg: "blue-grad-bg text-white",
    components: <CoursePage />,
  },
  {
    name: "Programming",
    to: "/programming",
    bg: "green-grad-bg text-white",
    components: <LanguagePage />,
  },
  {
    name: "Favorite",
    to: "/favorite",
    bg: "purple-grad-bg text-white",
    components: <FavoritePage />,
  },
];

function App() {
  const [showloading, setShowloading] = useState(true)

  window.setInterval(() => {
    setShowloading(false)
  }, 3000)

  useEffect(() => {
    let circles = document.getElementById("home-loading").children;
    for (let i = 0; i < circles.length; i++) {
      let ele = circles[i];
      ele.style.animationDelay = i / 10 + "s";
    }
  }, []);

  return (
    <div className="container-fluid app-bg overflow-hidden p-0">
      {showloading? <div
        id="home-loading"
        className="d-flex flex-row vh-100 loading-screen m-auto"
      >
        <div className="circle m-auto" style={{ top: "50vh" }}></div>
        <div className="circle m-auto" style={{ top: "50vh" }}></div>
        <div className="circle m-auto" style={{ top: "50vh" }}></div>
        <div className="circle m-auto" style={{ top: "50vh" }}></div>
        <div className="circle m-auto" style={{ top: "50vh" }}></div>
      </div>: <Router>
        <Switch>
          <Route exact path="/">
            <MainApp />
          </Route>
          {pages.map((page) => (
            <Route path={page.to} key={page.name}>
              <div className="row mt-2 pt-5">
                <div className="">
                  <Sidebar />
                </div>
                {page.to === "/about" ? (
                  page.components
                ) : (
                  <div
                    className="content-container col-md min-vh-100 w-100"
                  >
                    {page.components}
                  </div>
                )}
              </div>
            </Route>
          ))}
        </Switch>
      </Router>}
    </div>
  );
}

export default App;
