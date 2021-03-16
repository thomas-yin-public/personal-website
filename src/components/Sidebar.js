import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { pages } from "../App";
import MainApp from "./MainApp";

function Sidebar() {
  let newPages = [{ name: "Home", to: "/", components: <MainApp /> }, ...pages];
  let { url } = useRouteMatch();

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <React.Fragment>
      <div
        id="mobile-sidebar"
        className="sidebar shadow-lg d-flex flex-row justify-content-end text-white vw-100 bg-dark pe-4"
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "50px",
        }}
      >
        {!showSideBar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15%"
            height="100%"
            fill="currentColor"
            className="bi bi-list p-2"
            viewBox="0 0 16 16"
            onClick={() => setShowSideBar(true)}
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15%"
            height="100%"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
            onClick={() => setShowSideBar(false)}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        )}
        <span className="fw-bold">Personal Website</span>

        {showSideBar && (
          <div className="vw-100 vh-100 bg-dark">
            {newPages.map((page) => (
              <Link
                to={page.to}
                key={page.name}
                style={{ textDecoration: "none" }}
              >
                <div
                  className={`${url === page.to ? page.bg : ""} ${
                    url === "/about" ? "" : ""
                  } more-rounded mx-1 p-4 fw-bold zoom-hover text-white`}
                >
                  {page.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div
        id="sidebar"
        className="sidebar shadow-lg d-flex flex-row justify-content-end vw-100 bg-dark pe-4"
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        {newPages.map((page) => (
          <Link to={page.to} key={page.name} style={{ textDecoration: "none" }}>
            <div
              className={`${url === page.to ? page.bg : ""} ${
                url === "/about" ? "" : ""
              } more-rounded my-2 mx-1 p-2 fw-bold zoom-hover text-white`}
            >
              {page.name}
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
