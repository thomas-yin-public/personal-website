import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { pages } from "../App";
import MainApp from "./MainApp";

function Sidebar() {
  let newPages = [{ name: "Home", to: "/", components: <MainApp /> }, ...pages];

  let { url } = useRouteMatch();

  return (
    <div
      className="max-vh-100 p-3 pe-1"
      style={{ position: "fixed", top: 0, bottom: 0, width: "200px" }}
    >
      <div
        className={`h-100 more-rounded p-1 ${
          url === "/about" || "app-bg border-end"
        }`}
      >
        {/* <h3 className="p-3 bg-light more-rounded border m-1">😎</h3> */}
        {newPages.map((page) => (
          <Link to={page.to} key={page.name} style={{ textDecoration: "none" }}>
            <div
              className={`${url === page.to ? page.bg : ""} ${
                url === "/about" ? "text-white" : ""
              } more-rounded my-3 mx-1 p-2 fw-bold zoom-hover`}
            >
              {page.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;