import React, { useState } from "react";

import menu from "../assets/menu.svg";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const getClassName = () => (expanded ? "collapsible--expanded" : "");

  return (
    <nav className={`nav collapsible ${getClassName()}`}>
      <h1 className="nav__heading">Syaana TV | Kids</h1>
      <img
        alt=""
        className="icon nav__menu-icon"
        onClick={() => setExpanded(!expanded)}
        src={menu}
      />
      <ul
        className="list nav__list collapsible__content"
        onClick={() => setExpanded(!expanded)}
      >
        <li className="nav__item">Home</li>
        <li className="nav__item">Sign In</li>
        <li className="nav__item">Sign Up</li>
      </ul>
    </nav>
  );
}
