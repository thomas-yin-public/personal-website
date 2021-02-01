import React, { useState } from "react";

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
];

function FavoritePage() {
  const [selectedSite, setSelectedSite] = useState("");

  return (
    <div className="p-3">
      <h1 className="purple-grad-bg text-white p-5 more-rounded">Favorite</h1>
      <div className="d-flex flex-wrap">
      {websiteList.map((website) => (
        <div key={website.link} className="zoom-hover col-md-3 p-2 cursor-pointer">
          <div
            className="card shadow-sm w-100"
            style={{ height: "100%" }}
            onClick={() => setSelectedSite(website.link)}
          >
            <div className="card-img-top purple-grad-bg" style={{height: "5vh"}}></div>
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
        className={`${
          selectedSite ? "show-custom-modal" : "hide-custom-modal"
        } custom-modal justify-content-center`}
      >
        <div className="flex-fill custom-modal-body m-auto p-3 border more-rounded shadow">
          <div className="d-flex flex-row justify-content-end pb-3 ">
            <button
              className="btn btn-primary rounded-pill mx-1"
              onClick={() => setSelectedSite("")}
            >
              Close
            </button>
            <button className="btn btn-primary rounded-pill mx-1">
              Open in New Tab
            </button>
          </div>
          <div style={{height: "80vh"}} >
          <iframe src={selectedSite} className="h-100 w-100" /></div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FavoritePage;
