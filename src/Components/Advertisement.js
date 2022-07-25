import React from "react";

export default function Advertisement(props) {
  return (
    <div>
      <div className="large-adver">
        <div className="adver w-f  d-flx-jc-cen">
          <div className="adver-inner w-90">
            <div className=" w-90 d-flx-jc-cen">
              <h1 className="adve-title">Advertisment</h1>
            </div>
            <div className=" d-flx-jc-cen w-90 xx">
              <img
                src={props.src}
                alt=""
                className="adver-image"
                style={props.style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
