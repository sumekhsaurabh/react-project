import React, { useState, useRef } from "react";
// import "./Nav.css";

export default function Header() {
  function handleChange(event) {
    if (event.target.checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  return (
    <div>
      <div className="header-container w-f d-flx-jc-cen">
        <div className="header-container-inner d-flx-jc-cen w-f">
          <div className="w-90">
            <div className="larg-header">
              <div className="header-top w-90 d-flx-jc-sb">
                <img src="./Imagesss/vccircle.png" alt="" />
                <div className="social-icon ">
                  <ul className="d-flx-jc-sa">
                    <li>
                      {" "}
                      <img src="./Imagesss/search.png" alt="" /> Search
                    </li>
                    <li>
                      {" "}
                      <img src="./Imagesss/crown.png" alt="" />
                      Subscribe
                    </li>
                    <li>
                      {" "}
                      <img src="./Imagesss/sign.png" alt="" />
                      Sign In
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav d-flex-s-bet">
                <div className="nav-left">
                  <div className="nav-list">
                    <ul className="d-flx-jc-sb">
                      <li>Private Equity</li>
                      <li>Venture Capital</li>
                      <li>M&A</li>
                      <li>
                        Industry
                        <img
                          src="./Imagesss/drop.png"
                          alt=""
                          style={{
                            height: "6px",
                            weight: "20px",
                            paddingLeft: "3px",
                            marginBottom: "1px",
                          }}
                        />
                      </li>
                      <li>Stressed Assests</li>
                      <li>Limited Prtner</li>
                      <li>Founder</li>
                    </ul>
                  </div>
                </div>
                <div className="nav-right">
                  <p>
                    Customize{" "}
                    <img
                      src="./Imagesss/drop.png"
                      alt=""
                      style={{
                        height: "6px",
                        weight: "20px",
                        paddingLeft: "3px",
                        marginBottom: "1px",
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile-version-end */}
        <nav className="mobile-version">
          <ul className="nav-bar">
            <li className="logo">
              <a href="#">
                <img src="./Imagesss/vccircle.png" />
              </a>
            </li>
            <input type="checkbox" id="check" onChange={handleChange} />
            <span className="menu">
              <div className="upper">
                <img src="./Imagesss/vccircle.png" alt="" />
              </div>
              <div className="list">
                <div className="nav-border">
                  <li>
                    <a href="">Home</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Sign In</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">
                      {" "}
                      <img src="./Imagesss/crown.png" alt="" />
                      <span className="subscribe-color">Subscribe</span>
                    </a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Private Equity</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Venture Capital</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">M&A</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Industry</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Stressed Assests</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Limited Partner</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Founder</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">About Us</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Tag Listing</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Advertise With Us</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </div>
                <div className="nav-border">
                  <li>
                    <a href="">VCC Mobile App</a>
                  </li>
                </div>
                <label htmlFor="check" className="close-menu">
                  <i className="fas fa-times"></i>
                </label>
              </div>
            </span>
            <label htmlFor="check" className="open-menu">
              <i className="fas fa-bars"></i>
            </label>
            <span className="subscribe">
              <img src="./Imagesss/crown.png" alt="" /> subscribe
            </span>
          </ul>
        </nav>
      </div>
    </div>
  );
}
