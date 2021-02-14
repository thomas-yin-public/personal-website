import React, { useState, createContext } from "react";
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
  return (
    <div className="container-fluid app-bg overflow-hidden p-0">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainApp />
          </Route>
          {pages.map((page) => (
            <Route path={page.to} key={page.name}>
              <div className="row">
                <div className="">
                  <Sidebar />
                </div>
                {
                  page.to === "/about"?
                  page.components:
                  <div
                  className="col-md min-vh-100"
                  style={{ marginLeft: "200px" }}
                >
                  {page.components}
                </div>
                }
              </div>
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
