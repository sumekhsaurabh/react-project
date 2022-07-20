import React from "react";

export default function SmallAdver(props) {
  return (
    <div>
      {/* <div className="destop-version">
       <div className="smallAdver d-flx-cen">
        <div>
          <div className="d-flx-jc-cen">
            <div className="smallAdver-heading">Advertisement</div>
          </div>
          <img src="./imagesss/sudhir.png" alt="" />
        </div>
      </div> 
      </div> */}
      {/* mobile-version */}
      <div>
      <div className="smallAdver d-flx-cen mobile-version" style={props.display}>
        <div>
          <div className="d-flx-jc-cen">
            <div className="smallAdver-heading">Advertisement</div>
          </div>
          <img src="./Imagesss/sudhir.png" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}
