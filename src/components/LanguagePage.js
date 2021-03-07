import React, { useEffect } from "react";
import PageSwitch from "./PageSwitch";

const langList = {
  "Programming Language": [
    {
      C: {
        experience: ["Knowing Pointer Arithmetic"],
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
          "Knowing Modern C++ (e.g. C++20)",
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
          "Knowing the Gabage Collection (GC)",
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
          "Knowing the microtasks and macrotasks",
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
        experience: [
          "Knowing the numpy",
          "Knowing pandas and torchvision libraries",
        ],
        projects: [
          {
            title: "CNN training model",
            details: "Implement a CNN model with 90%+ accuracy",
          },
        ],
      },
    },
  ],

  "Web Related Technologies": [
    {
      "React.js": {
        experience: [
          "Knowing the Class Components and Functional Components",
          "Knowing the React Hooks",
        ],
        projects: [
          {
            title: "React Graph",
            details:
              "Implement a Web App and can handle simple data to display the graphs",
          },
        ],
      },
    },
    {
      "Node.js": {
        experience: [
          "Knowing the basic operation using Node.js",
          "Knowing some commonly used libraries (e.g. Express.js)",
        ],
        projects: [
          {
            title: "Backend Service",
            details:
              "Use Node.js to establish a backend server as an API server",
          },
        ],
      },
    },
    {
      SQL: {
        experience: ["Knowing CRUD operations"],
        projects: [
          {
            title: "Student databse",
            details:
              "Implement a Student Database to record the student's academic performances",
          },
        ],
      },
    },
    {
      NoSQL: {
        experience: [
          "Knowing the simple CRUD operations",
          "Knowing pipeline and aggregation",
        ],
        projects: [
          {
            title: "API server storage",
            details:
              "Implement a database for storing the information of the web app and handle the API requests",
          },
        ],
      },
    },
  ],
};

function LanguagePage() {
  const addAnimationDelay = (className, speed) => {
    let children = document.querySelector(className).children;
    for (let i = 0; i < children.length; i++) {
      let ele = children[i];
      ele.className += " custom-fade";
      ele.style.animationDelay = i / speed + "s";
    }
  };

  useEffect(() => {
    addAnimationDelay(".select-fade", 2);
  }, []);

  return (
    <div className="p-3 d-flex flex-column">
      <div className="row lang-bg page-header text-white p-0 m-0 more-rounded mb-2">
        <h1 className="col-md-4 p-5">Programming Language</h1>
        <p
          className="col-md white-trans-bg p-5 m-0"
          style={{ fontSize: "20px" }}
        >
          “Programs must be written for people to read, and only incidentally
          for machines to execute.” ― Harold Abelson, Structure and
          Interpretation of Computer Programs
        </p>
      </div>
      <div className="flex-grow-1">
        <PageSwitch pages={langList} defaultPage="C">
          {Object.keys(langList).map((section) => {
            return langList[section].map((langauge) => {
              let lang = Object.keys(langauge)[0];
              return (
                <div key={lang} className="flex-grow-1" pageValue={lang}>
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
                      <div>
                        <h5>{project.title}</h5>
                        <p>{project.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            });
          })}
        </PageSwitch>
      </div>
    </div>
  );
}

export default LanguagePage;
