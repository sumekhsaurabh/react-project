import React, { useState, useRef } from "react";

export default function Inputbox() {
  const inputValue = useRef(null);
  const [data, setData] = useState("");

  const inputdata = (event) => {
    setData(event.target.value);
  };

  const getdata = () => {
    console.log(data);
    inputValue.current.value = "";
  };

  return (
    <div>
      <div className="input-section w-f d-flx-jc-cen">
        <div className="input-section-inner w-90 d-flx-jc-cen">
          <div className="input-section-content d-flx-jc-sb">
            <div className="input-contant-1">
              <div
                className="input-right d-flx-jc-cen "
                style={{ width: "100%" }}
              >
                <img
                  src="./Imagesss/envelope.png"
                  alt=""
                  className="input-envlp"
                />
                <p className="envlp-para">
                  Get industry update with our daily newsletter <br />{" "}
                  <span className="envlp-para-1">Subscribe Now !</span>
                </p>
              </div>
            </div>
            <div className="input-contant-2 ">
              <div
                className="input-left d-flx-jc-cen"
                style={{ width: "100%" }}
              >
                <input
                  ref={inputValue}
                  type="text"
                  name="input"
                  id="input"
                  className="input-field"
                  placeholder="Email  Address"
                  onChange={inputdata}
                />
                <button className="sign-btn" onClick={getdata}>
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
