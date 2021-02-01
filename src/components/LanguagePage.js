import React from "react";
import PageSwitch from "./PageSwitch";

const langList = {
  "Programming Language": [
    {
      C: {
        experience: ["Know Pointer Arithmetic"],
        projects: [
          {
            title: "Production Line Scheduler",
            details:
              "Create an application to help a company to schedule production under best utilization of its plants",
          },
        ],
      },
    },
    {
      "C++": {
        experience: [
          "Know Modern C++ (e.g. C++20)",
          "RAII",
          "Return Value Optimazation (RVO)",
        ],
        projects: [
          {
            title: "RMQ problem",
            details:
              "Implement the algorithm for solving the RMQ problem in O(lg n)",
          },
        ],
      },
    },
    {
      Java: {
        experience: [
          "Know the Gabage Collection (GC)",
          "Design pattern",
          "Generic",
        ],
        projects: [
          {
            title: "Jungle Game",
            details: "Construct Jungle Game with 2 players using Java",
          },
        ],
      },
    },
    {
      JavaScript: {
        experience: [
          "Know the microtasks and macrotasks",
          "Promise",
          "Prototype Oriented Programming",
        ],
        projects: [
          {
            title: "Live Chat Web App",
            details: "Two users can chat with each other in real-time",
          },
        ],
      },
    },
    {
      Python: {
        experience: ["Know the numpy", "Know pandas and torchvision libraries"],
        projects: [
          {
            title: "CNN training model",
            details: "Implement a CNN model with 90%+ accuracy",
          },
        ],
      },
    },
  ],

  /* "Full Stack Technologies": [
    "React.js",
    "Node.js",
    "WebSocket",
    "WebRTC",
    "SQL",
    "NoSQL",
  ], */
};

function LanguagePage() {
  return (
    <div className="p-3">
      <h1 className="green-grad-bg text-white p-5 more-rounded">Courses</h1>
      <PageSwitch pages={langList} defaultPage="C">
        {Object.keys(langList).map((section) => {
          return langList[section].map((langauge) => {
            let lang = Object.keys(langauge)[0];
            return (
              <div pageValue={lang}>
                <h1>{lang}</h1>
                <h3>Experience</h3>
                <ul>
                  {langauge[lang].experience.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <h3>Project</h3>
                <div>
                  {langauge[lang].projects.map((project) => (
                    <div><h5>{project.title}</h5>
                    <p>{project.details}</p></div>
                  ))}
                </div>
              </div>
            );
          });
        })}
      </PageSwitch>
      <div></div>
    </div>
  );
}

export default LanguagePage;
