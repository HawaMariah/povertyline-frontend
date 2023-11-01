import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <header>
        <nav>
          <h1>
            SKILL <span>HUNTER</span>
          </h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="admin">Admin</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;
