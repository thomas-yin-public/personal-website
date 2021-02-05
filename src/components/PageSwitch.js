import React, { useState, useEffect } from "react";

function PageSwitch({ children = [], pages, defaultPage = "" }) {
  const [selectedPage, setSelectedPage] = useState(defaultPage);
  
  return (
    <div className="row p-0 m-0">
      <div className="select-fade col-md-3 p-0 d-flex flex-wrap me-3">
        {Object.keys(pages).map((section) => (
          <div key={section} className="shadow-sm bg-white more-rounded border p-3 mb-3">
            <h3 className="">{section}</h3>
            {pages[section].map((lang) => {
              let page = Object.keys(lang)[0]
              return (
              <div
                key={page}
                className="btn btn-outline-success border m-1"
                onClick={() => setSelectedPage(page)}
              >
                {page}
              </div>
            )})}
          </div>
        ))}
      </div>
      <div className="col-md shadow-sm border overflow-auto more-rounded p-3 bg-white">
        {[...children].map((ele) => {
          return (ele.map(item => {
            if (item.props.pageValue === selectedPage)
            return item
          }))
        })}
      </div>
    </div>
  );
}

export default PageSwitch;
