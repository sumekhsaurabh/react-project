import React, { useState, useRef } from "react";
// import "./Nav.css";

export default function Header() {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    //  document.body.style.overflow ="hidden"
    

  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
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

        {/* div.mobilie-version */}
        <div className="menubar-outer w-f d-flx-jc-cen">
          <div className=" out w-90">
            <div className="menubar w-90 d-flx-jc-sb">
              <div className="menubar-left d-flx-jc-sb">
                <span
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    marginTop: "5px",
                  }}
                  id="openbtn"
                  onClick={openNav}
                >
                  &#9776;
                </span>
                <img src="./Imagesss/vccircle.png" alt="" />
              </div>

              <div className="menubar-right">
                <div className="menubar-right-content">
                  <img
                    src="./Imagesss/crown.png"
                    alt=""
                    className="menubar-right-img"
                  />{" "}
                  <span className="menubar-right-text">Subscribe</span>{" "}
                </div>
              </div>
              <div id="myNav" className="overlay">
                <div className="border">
                  {/*  */}
                  <a
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={closeNav}
                  >
                    &times;
                  </a>
                  <img
                    src="./Imagesss/vccircle.png"
                    alt=""
                    className="slider-logo"
                  />
                </div>
                <div
                  className="overlay-content"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    style={{
                      fontSize: "25px",
                      backgroundColor: "white",
                      marginTop: "27px",
                    }}
                  >
                    <div className="slider">
                      {" "}
                      <a href="">HOME</a>{" "}
                    </div>
                    <div className="slider">
                      {" "}
                      <a href="">SIGN IN</a>
                    </div>
                    <div className="slider">
                      <a
                        href=""
                        style={{ display: "inline-block", color: "#faa405" }}
                      >
                        subscribe
                      </a>{" "}
                      <img
                        src="./Imagesss/crown.png"
                        alt=""
                        style={{ display: "inline-block" }}
                      />
                    </div>
                    <div className="slider">
                      <a href="">Private Equity</a>
                    </div>
                    <div className="slider">
                      <a href="">Venture Capital</a>
                    </div>
                    <div className="slider">
                      <a href="">M$A</a>
                    </div>
                    <div className="slider">
                      <a href="">Industry</a>
                    </div>
                    <div className="slider">
                      <a href="">Streaaed Assets</a>
                    </div>
                    <div className="slider">
                      <a href="">Limited partner</a>
                    </div>
                    <div className="slider">
                      <a href="">Founder</a>
                    </div>
                    <div className="slider">
                      <a href="">About Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile-version-end */}
      </div>
    </div>
  );
}

