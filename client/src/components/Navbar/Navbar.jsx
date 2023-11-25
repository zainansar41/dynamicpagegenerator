import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <div className="logo">
            <Link to="#">Navbar</Link>
          </div>
          <ul className="links">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#" className="desktop-link">
                Features
              </Link>
              <input type="checkbox" id="show-features" />
              <label htmlFor="show-features">Features</label>
              <ul>
                <li>
                  <Link to="#">Drop Menu 1</Link>
                </li>
                <li>
                  <Link to="#">Drop Menu 2</Link>
                </li>
                <li>
                  <Link to="#">Drop Menu 3</Link>
                </li>
                <li>
                  <Link to="#">Drop Menu 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="desktop-link">
                Services
              </Link>
              <input type="checkbox" id="show-services" />
              <label htmlFor="show-services">Services</label>
              <ul>
                <li>
                  <Link to="#">Drop Menu 1</Link>
                </li>
                <li>
                  <Link to="#">Drop Menu 2</Link>
                </li>
                <li>
                  <Link to="#">Drop Menu 3</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Feedback</Link>
            </li>
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon">
          <i className="fas fa-search"></i>
        </label>
        <form action="#" className="search-box">
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
          />
          <button type="submit" className="go-icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form>
      </nav>
    </div>
  );
}
