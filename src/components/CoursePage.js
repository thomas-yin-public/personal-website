import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../App";

const courseData = [
  {
    sem: "2018/19 Semester1",
    code: "AMA1104",
    title: "INTRODUCTORY PROBABILITY",
  },
  {
    sem: "2018/19 Semester1",
    code: "COMP1001",
    title: "PROBLEM SOLVING METHODOLOGY IN INFORMATION TECHNOLOGY",
  },
  {
    sem: "2018/19 Semester1",
    code: "COMP1901",
    title: "SEMINARS AND TOPICS IN INFORMATION TECHNOLOGY",
  },
  {
    sem: "2018/19 Semester1",
    code: "ELC1013",
    title: "ENGLISH FOR UNIVERSITY STUDIES",
  },
  {
    sem: "2018/19 Semester1",
    code: "GEC1H16",
    title: "GOVERNING CHINA: CHINESE POLITICS AND LEGAL SYSTEM",
  },
  { sem: "2018/19 Semester2", code: "APSS1L01", title: "TOMORROW'S LEADERS" },
  { sem: "2018/19 Semester2", code: "CBS1104C", title: "UNIVERSITY CHINESE" },
  {
    sem: "2018/19 Semester2",
    code: "COMP1003",
    title: "STATISTICAL TOOLS AND APPLICATIONS",
  },
  {
    sem: "2018/19 Semester2",
    code: "COMP1011",
    title: "PROGRAMMING FUNDAMENTALS",
  },
  { sem: "2018/19 Semester2", code: "COMP2012", title: "DISCRETE MATHEMATICS" },
  {
    sem: "2018/19 Semester2",
    code: "ELC2011",
    title: "ADVANCED ENGLISH READING AND WRITING SKILLS",
  },
  { sem: "2019/20 Semester1", code: "COMP2011", title: "DATA STRUCTURES" },
  {
    sem: "2019/20 Semester1",
    code: "COMP2021",
    title: "OBJECT-ORIENTED PROGRAMMING",
  },
  { sem: "2019/20 Semester1", code: "COMP2411", title: "DATABASE SYSTEMS" },
  {
    sem: "2019/20 Semester1",
    code: "COMP2421",
    title: "COMPUTER ORGANIZATION",
  },
  {
    sem: "2019/20 Semester1",
    code: "GEC1A49P",
    title: "CHINESE ARTS AND LIFE",
  },
  {
    sem: "2019/20 Semester2",
    code: "AMA1D05",
    title: "MODELING THE WORLD: FROM PHENOMENA TO MATHEMATICS",
  },
  {
    sem: "2019/20 Semester2",
    code: "COMP2222",
    title: "INTRODUCTION TO HUMAN-COMPUTER INTERACTION METHODS",
  },
  { sem: "2019/20 Semester2", code: "COMP2322", title: "COMPUTER NETWORKING" },
  { sem: "2019/20 Semester2", code: "COMP2432", title: "OPERATING SYSTEMS" },
  { sem: "2019/20 Semester2", code: "COMP3211", title: "SOFTWARE ENGINEERING" },
  {
    sem: "2019/20 Semester2",
    code: "LSGI1B02",
    title: "CLIMATE CHANGE AND SOCIETY",
  },
  {
    sem: "2020/21 Semester1",
    code: "APSS2S05",
    title: "PROMOTION OF CHILDREN AND ADOLESCENT DEVELOPMENT",
  },
  {
    sem: "2020/21 Semester1",
    code: "CLC3242P",
    title: "CHINESE FOR PROFESSIONAL COMMUNICATION IN COMPUTING",
  },
  {
    sem: "2020/21 Semester1",
    code: "COMP3011",
    title: "DESIGN AND ANALYSIS OF ALGORITHMS",
  },
  {
    sem: "2020/21 Semester1",
    code: "COMP3121",
    title: "SOCIAL AND LABORATIVE COMPUTING",
  },
  { sem: "2020/21 Semester1", code: "COMP3438", title: "SYSTEM PROGRAMMING" },
  {
    sem: "2020/21 Semester1",
    code: "COMP4431",
    title: "ARTIFICIAL INTELLIGENCE",
  },
];

const semList = [
  "All Sememsters",
  "2018/19 Semester1",
  "2018/19 Semester2",
  "2019/20 Semester1",
  "2019/20 Semester2",
];

function CoursePage() {
  const [courseList, setCourseList] = useState(courseData);
  const [filterInput, setFilterInput] = useState("");
  const [semListFilter, setSemListFilter] = useState("All Sememsters");

  const filterList = () => {
    if (!filterInput && semListFilter === "All Sememsters")
      return setCourseList(courseData);

    let newList =
      courseData.filter((course) => {
        if (
          (course.code.match(`(${filterInput.toUpperCase()})`) ||
            course.title.match(`(${filterInput.toUpperCase()})`)) &&
          (course.sem === semListFilter || semListFilter === "All Sememsters")
        )
          return course;
      }) || [];

    setCourseList(newList);
  };

  useEffect(() => {
    filterList();
  }, [filterInput, semListFilter]);

  const theme = useContext(ThemeContext);
  const lightTheme = "text-dark table-light";
  const darkTheme = "text-white table-dark-theme";
  const checkTheme = () => {
    if (theme === "dark") return darkTheme;
    return lightTheme;
  };

  return (
    <div className="p-3">
      <h1 className="blue-grad-bg text-white p-5 more-rounded">Courses</h1>
      <div className="">
        <div className="d-flex flex-wrap">
          {semList.map((sem) => (
            <div
              key={sem}
              className={`${sem === semListFilter? "btn-primary": "btn-outline-primary"} rounded-pill btn me-2`}
              onClick={() => setSemListFilter(sem)}
            >
              {sem}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="d-flex my-2">
          <input
            className="form-control rounded-pill"
            placeholder="Type the keywords (e.g. Course code, title) to filter the list and see if I have taken this course"
            type="text"
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
          />
          <button
            className="btn btn-primary rounded-pill ms-2"
            onClick={() => setFilterInput("")}
          >
            Clear
          </button>
        </div>
        <table
          className={`shadow table more-rounded border table-hover ${checkTheme()}`}
        >
          <tbody>
            <tr>
              <th style={{ width: "20%" }}>Code</th>
              <th>Title</th>
            </tr>
            {courseList.map((course) => (
              <tr key={course.code} className="zoom-hover shadow border">
                <td>{course.code}</td>
                <td>{course.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoursePage;
