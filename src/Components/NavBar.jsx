import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <header>
        <nav>
          <h1>
            GIG <span>HUNTING</span>
          </h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="abou
          t">About</NavLink>
          <NavLink to="contact us">Contact us</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;
