import React, { useState, useEffect } from "react";

const websiteList = [
  {
    title: "Dev.to",
    link: "https://dev.to/",
    description:
      "A constructive and inclusive social network for software developers. With you every step of your journey.",
  },
  {
    title: "Pexels",
    link: "https://www.pexels.com/",
    description:
      "Free stock photos you can use everywhere. ✓ Free for commercial use ✓ No attribution required.",
  },
  {
    title: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/Main_Page",
    description:
      "a multilingual open-collaborative online encyclopedia created and maintained by a community of volunteer editors using a wiki-based editing system.",
  },
  {
    title: "Cambridge Dictionary",
    link: "https://dictionary.cambridge.org/us/",
    description:
      "The world’s favourite online dictionaries and grammar resources for learners of English",
  },
  {
    title: "BBC News",
    link: "https://www.bbc.com/news",
    description:
      "Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories",
  },
  {
    title: "Amazon",
    link: "https://www.amazon.com/",
    description:
      "Free delivery on millions of items with Prime. Low prices across earth's biggest selection of items",
  },
];

function FavoritePage() {
  const [selectedSiteLink, setSelectedSiteLink] = useState("");

  const addAnimationDelay = (className, speed) => {
    let children = document.querySelector(className).children;
    for (let i = 0; i < children.length; i++) {
      let ele = children[i];
      ele.className += " custom-fade";
      ele.style.animationDelay = i / speed + "s";
    }
  };

  useEffect(() => {
    addAnimationDelay(".card-fade", 5);
  }, []);

  return (
    <div className="p-3">
      <div className="row fav-bg page-header text-white p-0 m-0 more-rounded mb-2">
        <h1 className="col-md-4 p-5">Favorite</h1>
        <p
          className="col-md white-trans-bg p-5 m-0"
          style={{ fontSize: "20px" }}
        >
          “How rich we are in knowledge, and in all that lies around us yet to
          learn. Billionaires, all of us.” ― Ursula K. Le Guin
        </p>
      </div>
      <div className="card-fade d-flex flex-wrap">
        {websiteList.map((website) => (
          <div
            key={website.link}
            className=" zoom-hover col-md-3 p-2 cursor-pointer"
          >
            <div
              className="card shadow-sm w-100"
              style={{ height: "100%" }}
              onClick={() => setSelectedSiteLink(website.link)}
            >
              <div
                className="card-img-top purple-grad-bg"
                style={{ height: "5vh" }}
              ></div>
              <div className="card-body text-dark">
                <h3 className="card-title">{website.title}</h3>
                <div className="text-muted">{website.link}</div>
                <p className="card-text">{website.description}</p>
              </div>
              <div className="card-footer text-muted">Click to preview</div>
            </div>
          </div>
        ))}
        <div
          className={`custom-modal ${
            selectedSiteLink ? "show-custom-modal" : "hide-custom-modal"
          }`}
        >
          <div
            className={`p-3 d-flex flex-column bg-white more-rounded border shadow`}
            style={{ width: "80%", height: "90%" }}
          >
            <div className="d-flex flex-row justify-content-end mb-3">
              <a
                className="shadow-sm btn btn-outline-primary rounded-pill ms-2"
                href={selectedSiteLink}
                target="_blank"
              >
                Open in New Tab
              </a>
              <button
                className="shadow-sm btn btn-primary rounded-pill ms-2"
                onClick={() => setSelectedSiteLink("")}
              >
                Close
              </button>
            </div>
            <iframe
              className="flex-grow-1 border more-rounded shadow-sm"
              src={selectedSiteLink}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
