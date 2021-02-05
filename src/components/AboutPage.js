import React, { useEffect } from "react";
import pic1 from "../img/me1.jpg";
import pic2 from "../img/me2.jpg";
import pic3 from "../img/me3.jpg";

function AboutPage() {
  const addAnimationDelay = (className, speed) => {
    let children = document.querySelector(className).children
    for (let i = 0; i < children.length; i++) {
      let ele = children[i]
      ele.className += " custom-fade"
      ele.style.animationDelay = i/speed + 's'
    }
  }

  useEffect(() => {
    addAnimationDelay(".fade-pic", 5)
  }, [])

  return (
    <div className="about-bg min-vh-100">
      <div className="row h-100" style={{ marginLeft: "250px" }}>
        <div className="fade-pic col-md m-auto d-flex flex-row align-items-center" style={{ height: "80%" }}>
          <div className="col-md-4 p-2">
            <img src={pic1} className="about-self-pic shadow-sm" />
          </div>
          <div className="col-md-4 p-2">
            <img src={pic2} className="about-self-pic shadow-sm" />
          </div>
          <div className="col-md-4 p-2">
            <img src={pic3} className="about-self-pic shadow-sm" />
          </div>
        </div>
        <div className="col-md bg-dark text-white p-4 m-auto">
          <h1>About Me</h1>
          <p>
            Hello, I'm Thomas. A year 3 student studying Computing at PolyU.
          </p>
          <p>
            I'm a cautious person who also good at logical thinking and
            problem-solving. During these 3 years of studying in the department
            of computing, I have been trained to think about things
            systematically. I can summarize the discrete information and study
            the information or requirement detailly and convert them into
            meaningful and systemic information. When facing a problem or
            dilemma, I will figure out the root of the problem first and try to
            think of different solutions to solve the problem.
          </p>
          <p>
            I'm also good at coding and programming. When programming a
            solution, each line of code must be precise and concise. Missing a
            character can lead to the corruption of the whole program.
            Therefore, it makes me cautious when handling different problems
            even in daily life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
