import React from "react";
import { Link } from "react-router-dom";

const weekdays = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Firday",
  "Saturday",
];

const pageInfo = [
  {
    name: "About Me",
    to: "/about",
    style: "col-xl-4",
    bg: "red-grad-bg text-white",
    info: "This section is about me and some basic infomation about me",
  },
  {
    name: "Courses",
    to: "/courses",
    style: "col-xl-4",
    bg: "blue-grad-bg text-white",
    info: "It is a section about what I have studied in the PolyU",
  },
  {
    type: "date",
    name: weekdays[new Date().getDay()],
    to: "/",
    style: "col-xl-4",
    info: new Date().getDate(),
  },
  {
    name: "Programming Language",
    to: "/programming",
    style: "col-xl-8",
    bg: "green-grad-bg text-white",
    info: "It is a section about what programming languages I know",
  },
  {
    name: "Favorite",
    to: "/favorite",
    style: "col-xl-4",
    bg: "purple-grad-bg text-white",
    info: "It is a section about my favorite websites",
  },
];

function MainApp() {
  return (
    <div className="row m-0 min-vh-100 p-0">
      <div className="col-md bg-white p-5 shadow-sm">
        <p className="display-1 mb-5">Welcome. I'm Thomas</p>
        <p className="display-4 ">
          Here is my personal website. You can click the buttons to know more
          about me!
        </p>
      </div>
      <div className="col-md row align-self-center p-5">
        <h3 className="">Quick Links</h3>
        {pageInfo.map((page) => (
          <div key={page.name} className={`p-2 ${page.style}`}>
            <Link
              to={page.to}
              style={{ textDecoration: "none", height: "100%" }}
            >
              <div
                className={`${page.bg} cursor-pointer zoom-hover
                h-100 more-rounded p-3 shadow border`}
              >
                <div
                  className={`fw-bold mb-1 ${
                    page.type === "date" ? "text-center" : ""
                  }`}
                >
                  {page.name}
                </div>
                <p
                  className={`${
                    page.type === "date" ? "text-center display-1" : ""
                  }`}
                >
                  {page.info}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
