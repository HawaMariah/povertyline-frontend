import React from "react";
import {NavLink, Outlet} from 'react-router-dom'


function Help() {

  return <div className="help-layout">
    <div className="help-layout-content">

     <h3 className="font-bold" >Website Help</h3>
    
    </div>
    <nav>
      <NavLink to="faq">View FAQ</NavLink>
      <NavLink to="contact">Contact us</NavLink> 
    </nav>

    <main>
      <Outlet/>
    </main>
  </div>;
}

export default Help;