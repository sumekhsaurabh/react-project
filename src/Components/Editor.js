import React from "react";
// import SmallAdver from "./Components/SmallAdver";

export default function Editor(props) {
  return (
    <div>
      <div className="editor-container w-f d-flx-jc-cen">
        <div className="editor-inner-container w-90">
          <h3 className="editor-container-title">Editor’s Pick</h3>
        </div>
        <div className="w-90 d-flex-jc-se">
          <div className="editor-content d-flx-jc-sb w-90">
            <div className="editor-1">
              <div className="editor-img">
                <div className="primium-card editor-prim">
                  <button>PRIMIUM</button>
                </div>
                <img src={props.img_1} alt="" />
              </div>
              <h3 className="edit-heading">{props.title_2}</h3>
              <p className="edit-para">{props.para_1}</p>
              <div className="update">
                <span className="update-date">30 september</span>
                <div className="updater-dott"></div>
                <span className="updater-name">Madhurima Nandy</span>
              </div>
            </div>
            <div className="editor-2 second">
              <div className="editer-2-box-1 d-flx">
                <div>
                  <div className="primium-card finamce-prime">
                    <button>PRIMIUM</button>
                  </div>
                  <img src={props.img_2} alt="" />
                </div>
                <div className="editer-2-box-1-content">
                  <h3 className="editer-2-box-1-title">{props.title_2}</h3>
                  <p className="editer-2-box-1-para">{props.para_2}</p>
                  <div className="update">
                    <span className="update-date">30 september</span>
                    <div className="updater-dott"></div>
                    <span className="updater-name">Madhurima Nandy</span>
                  </div>
                </div>
              </div>
              <div className="editer-2-box-1 d-flx">
                <div>
                  <img src={props.img_3} alt="" />
                </div>
                <div className="editer-2-box-1-content">
                  <h3 className="editer-2-box-1-title">{props.title_3}</h3>
                  <p className="editer-2-box-1-para">{props.para_3}</p>
                  <div className="update">
                    <span className="update-date">30 september</span>
                    <div className="updater-dott"></div>
                    <span className="updater-name">Madhurima Nandy</span>
                  </div>
                </div>
              </div>
              <div className="editer-2-box-1 d-flx third">
                <div>
                  <img src={props.img_4} alt="" />
                </div>
                <div className="editer-2-box-1-content">
                  <h3 className="editer-2-box-1-title">{props.title_4}</h3>
                  <p className="editer-2-box-1-para">{props.para_4}</p>
                  <div className="update">
                    <span className="update-date">30 september</span>
                    <div className="updater-dott"></div>
                    <span className="updater-name">Madhurima Nandy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="editor-3">
              <div className="">
                <div className="editor-smallAdver d-flx-cen">
                  <div>
                    <div className="d-flx-jc-cen">
                      <div className="editor-smallAdver-heading">
                        Advertisement
                      </div>
                    </div>
                    <img src="./Imagesss/sudhir.png" alt="" />
                  </div>
                </div>
              </div>

              {/* <SmallAdver /> */}
            </div>
          </div>
        </div>
        <div className="editor-empty w-90"></div>
      </div>
    </div>
  );
}
