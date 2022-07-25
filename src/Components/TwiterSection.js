import React from "react";
import SmallAdver from "./SmallAdver";

export default function TwiterSection() {
  return (
    <div>
      <div className="twit w-f d-flx-jc-cen">
        <div className="twit-inner w-90 d-flx-jc-sb">
          <div className="twit-box-1">
            <div>
              <img src="./Imagesss/Twitter-section-image-1.png" alt="" />
            </div>
            <p className="twit-box-1-caption">
              VCCircle.com <br /> World Bank arm IFC to double down its
              investments into funds in 2022
            </p>
          </div>
          <div className="twit-box-2">
            <p className="twit-box-2-title">Infographic</p>
            <div className="twit-box-2-inner">
              <img src="./Imagesss/Twitter-section-image-2.png" alt="" />
            </div>
          </div>
          <div className="twit-box-3">
            <div className="">
                <div className="editor-smallAdver d-flx-cen">
                  <div>
                    <div className="d-flx-jc-cen">
                      <div className="editor-smallAdver-heading">Advertisement</div>
                    </div>
                    <img src="./Imagesss/sudhir.png" alt="" />
                  </div>
                </div>
              </div> 
          </div>
        </div>
        <div className="editor-empty w-90"></div>
      </div>
    </div>
  );
}
