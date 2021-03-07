import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { pages } from "../App";
import MainApp from "./MainApp";

function Sidebar() {
  let newPages = [{ name: "Home", to: "/", components: <MainApp /> }, ...pages];

  let { url } = useRouteMatch();

  return (
    <React.Fragment>
      <div
        className="max-vh-100 p-3 pe-1"
        style={{ position: "fixed", top: 0, bottom: 0, width: "200px" }}
      >
        <div className={`more-rounded p-1 ${url === "/about" || ""}`}>
          {/* <h3 className="p-3 bg-light more-rounded border m-1">😎</h3> */}
          {newPages.map((page) => (
            <Link
              to={page.to}
              key={page.name}
              style={{ textDecoration: "none" }}
            >
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
      {/* <div
        className="bg-white m-1 p-2 text-muted more-rounded shadow-sm"
        style={{ position: "fixed", bottom: 0 }}
      >
        Contact Me
        <br />
        Email: hs094a40@gmail.com
      </div> */}
    </React.Fragment>
  );
}

export default Sidebar;
