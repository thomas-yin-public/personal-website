import React  from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { pages } from "../App";
import MainApp from "./MainApp";

function Sidebar() {
  let newPages = [{ name: "Home", to: "/", components: <MainApp /> }, ...pages];

  let { url } = useRouteMatch();

  return (
    <div
      className="bg-white vh-100 col-2 shadow-sm"
      style={{ position: "fixed", top: 0 }}
    >
      {newPages.map((page) => (
        <Link to={page.to} key={page.name} style={{ textDecoration: "none" }}>
          <div
            className={`${
              url === page.to ? page.bg : ""
            } more-rounded m-3 p-2 fw-bold zoom-hover`}
          >
            {page.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
