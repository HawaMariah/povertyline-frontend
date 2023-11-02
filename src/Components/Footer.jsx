import React from "react";
import "./Footer.css";

function Footer() {
  return (
  <div className="main-footer">
    <div className="container">
        <div className="row">
            {/* Column1 */}
            <div className="col">
                <h4>Location</h4>
                <ul className="list-unstyled">
                <li><a href="#">+254772345678</a></li>
                <li><a href="#">Nairobi, Kenya</a></li>
                <li><a href="#">123 Street Kilimani</a></li>

                </ul>
            </div>
            {/* Column2 */}
            <div className="col">
                <h4>Stuff</h4>
                <ul className="list-unstyled">
                <li><a href="#">John doe</a></li>
                <li><a href="#">John doe</a></li>
                <li><a href="#">John doe</a></li>
                </ul>
            </div>
            {/* Column3 */}
            <div className="col">
                <h4>Services</h4>
                <ul className="list-unstyled">
                <li><a href="#">Career</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Get hired</a></li>
                </ul>                             
            </div>
              
             {/* Column4 */}
          <div className="col">
            <h4>Socials</h4>
            <ul className="list-unstyled socialicons">
              <li>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div>
        <hr />
        <div className="row1">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} Gighunting LTD | All rights reserved | Terms Of Services | Privacy

            </p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Footer;