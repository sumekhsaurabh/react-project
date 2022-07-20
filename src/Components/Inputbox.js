import React, {useState } from "react";

export default function Inputbox() {
  const[data, setData]= useState("")
  function getvalue(){
    // e.preventDefault()
    console.log(data)
    setData("")
  }
  // function value(e){
  //   setData(e.target.value)
  // }
  
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
                  type="text"
                  name=""
                  id=""
                  className="input-field"
                  placeholder="Email  Address" onChange={(e)=>setData(e.target.value)}                />

                <button className="sign-btn" onClick={getvalue}>SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
