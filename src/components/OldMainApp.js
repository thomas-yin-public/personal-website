import React from "react";
import { Link } from "react-router-dom";
import { SidebarHeight } from "../App";

const pages = {
  "About Me": [
    "/about",
    "It is a section about me, my background information and my major",
  ],
  Courses: [
    "/courses",
    "It is a section about what I have studied in the PolyU",
  ],
  "Programming Language": [
    "/programming",
    "It is a section about what programming languages I know",
  ],

  "Favorite Website": [
    "/favorite",
    "It is a section about my favorite websites",
  ],
};

const weekdays = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Firday",
  "Saturday",
];

function MainApp() {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-6 p-5" style={{height: `calc( 100vh - ${SidebarHeight} )`}}>
          <h1 className="ps-3">
            Welcome. Here is my personal website. You can click the belows
            buttons to know more about me!
          </h1>
        </div>
        <div className="col-md red-gradient-bg"></div>
      </div>
      <div className="row main-app-navbar p-3">
        <div className="col-md px-2">
          <div
            className="navbar-tile border shadow p-3 red-gradient-bg"
            style={{ height: "90%" }}
          >
            <div className="fw-bold text-white text-center">
              {weekdays[new Date().getUTCDay()]}
            </div>
            <p className="text-white display-1 text-center">
              {new Date().getUTCDate()}
            </p>
          </div>
        </div>
        {Object.keys(pages).map((page) => (
          <div className="col-md px-2" key={page}>
            <Link to={pages[page][0]} style={{ textDecoration: "none" }}>
              <div
                className={`navbar-tile border shadow p-3 bg-white`}
                style={{ height: "90%" }}
              >
                <div className="fw-bold text-dark">{page}</div>
                <p className="text-dark">{pages[page][1]}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
