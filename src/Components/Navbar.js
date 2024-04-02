import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [theme, setTheme] = useState("light");
  function handleChangeTheme() {
    let root = document.getElementById("root");
    console.log("change themem called ");
    if (theme === "light") {
      root.setAttribute("data-bs-theme", "dark");
      setTheme("dark");
    } else {
      root.setAttribute("data-bs-theme", "light");
      setTheme("light");
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container">
          <Link className="navbar-brand" href="/">
            News2Day
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/addnews">
                  Add
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle active"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div className="form-check form-switch d-block ms-4" >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onClick={handleChangeTheme}
                      />
                      <label
                        className="form-check-label "
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {(theme==="light"?`Dark`:`Light`)}
                      </label>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item">Log Out</div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
