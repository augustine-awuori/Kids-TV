import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ to = "#", img, title }) {
  return (
    <NavLink to={to} className="card">
      <img src={img} alt="" className="card__image" />
      <footer className="card__footer">
        <p className="card__title">{title}</p>
      </footer>
    </NavLink>
  );
}
