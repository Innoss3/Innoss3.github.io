import React from "react";
import "./nav2.css";
import { NavLink } from "react-router-dom";

const nav2 = () => {
  return (
    <div className="nav2">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/tutoriels"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Tutoriels</li>
        </NavLink>
        <NavLink
          to="/blog"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Blog</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default nav2;
