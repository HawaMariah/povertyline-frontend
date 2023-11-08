import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar py-7">
      <header>
        <nav>
          <h1>
            GIG <span>HUNTING</span>
          </h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact us">Contact us</NavLink>

          
          <NavLink to="/profile">Sign Up</NavLink>
          <NavLink to="/profile">Log in</NavLink>
        </nav>
      </header>
      {/* <main>
        <Outlet />
      </main> */}
    </div>
  );
}

export default NavBar;
