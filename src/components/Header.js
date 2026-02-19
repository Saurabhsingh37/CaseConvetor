import "./Header.css";
import React from "react";

function Header(props) {
  return (
    <>
      <header className="naveBar">
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">{props.aboutText}</a>
                </li>

              </ul>

              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search"/>
                <button className="btn btn-search" type="submit">Search</button>
              </form>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
