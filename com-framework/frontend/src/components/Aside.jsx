import React from "react";
import { Link } from "react-router-dom";

const Aside = ({ links = [] }) => {
  return (
    <aside>
      <h2>Menu</h2>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
