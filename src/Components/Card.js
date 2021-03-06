import React from "react";

export default function Card() {
  return (
    <>
      <div className="top-card w-f d-flx-jc-cen">
        <div className="top-card-inner w-90 d-flx-jc-sb">
          <div className="top-box d-flx prim-card big-card">
            <div className="top-box-content">
              <div>
                <div className="primium-card">
                  <button>PRIMIUM</button>
                </div>
                <div>
                  <img src="./Imagesss/card-image-1.png" alt="" />
                </div>

                <div>
                  <h3 className="top-box-title">ECONOMY</h3>
                  <p className="top-box-para">
                    Indian shares snap 5-day rally on weak global cues, post
                    weekly gain
                  </p>
                  <div className="update card-update">
                    <span className="update-date">30 september</span>
                    <div className="updater-dott"></div>
                    <span className="updater-name">Madhurima Nandy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-box big-card">
            <div className="top-box-content">
              <div>
                <div className="primium-card">
                  <button>PRIMIUM</button>
                </div>
                <img src="./Imagesss/card-image-2.png" alt="" />
              </div>
              <h3 className="top-box-title">FINANCE</h3>
              <p className="top-box-para">
                Paytm to shut Canada B2C app amid eroding market capitalisation
              </p>
              <div className="update card-update">
                <span className="update-date">30 september</span>
                <div className="updater-dott"></div>
                <span className="updater-name">Madhurima Nandy</span>
              </div>
            </div>
          </div>
          <div className="top-box big-card">
            <div className="top-box-content">
              <div>
                <img src="./Imagesss/card-image-3.png" alt="" />
              </div>
              <h3 className="top-box-title">CONSUMER</h3>
              <p className="top-box-para">
                Exclusive: PE-backed sauce maker Wingreens acquires Lok
                Capital-backed cereal maker
              </p>
              <div className="update card-update">
                <span className="update-date">30 september</span>
                <div className="updater-dott"></div>
                <span className="updater-name">Madhurima Nandy</span>
              </div>
            </div>
          </div>
          <div className="top-box big-card">
            <div className="top-box-content">
              <div>
                <div className="primium-card">
                  <button>PRIMIUM</button>
                </div>
                <img src="./Imagesss/card-image-4.png" alt="" />
              </div>
              <h3 className="top-box-title">ECONOMY</h3>
              <p className="top-box-para">
                GLOBAL MARKETS-European shares in the red after hawkish Fed
                comments
              </p>
              <div className="update card-update">
                <span className="update-date">30 september</span>
                <div className="updater-dott"></div>
                <span className="updater-name">Madhurima Nandy</span>
              </div>
            </div>
          </div>
          {/* responsive start */}
          <div className="responses">
            <div className="d-flex ">
              <div className="top-card-1-img prime">
                <div className="primium-card card-prim">
                  <button>PRIMIUM</button>
                </div>
                <img
                  src="./Imagesss/card-image-1.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                className="top-card-1-containt"
                style={{ paddingLeft: "5px" }}
              >
                <div className="top-card-1-title">
                  <h3>ECONOMY</h3>
                </div>
                <p className="top-card-1-para">
                  Indian shares snap 5-day rally on weak global cues, post
                  weekly gain
                </p>
                <div className="updaters">
                  <span className="update-date">30 september</span>
                  <div className="updater-dott"></div>
                  <span className="updater-name">Madhurima Nandy</span>
                </div>
              </div>
            </div>
            <hr
              style={{
                margin: "10px 0px 10px 0px",
                height: "2px",
                backgroundColor: "#c1bdbd",
              }}
            />

            <div>
              <div className="d-flex">
                <div className="top-card-1-img">
                  <img
                    src="./Imagesss/card-image-2.png"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div
                  className="top-card-1-containt"
                  style={{ paddingLeft: "5px" }}
                >
                  <div className="top-card-1-title">
                    <h3>FINANCE</h3>
                  </div>
                  <p className="top-card-1-para">
                    Paytm to shut Canada B2C app amid eroding market
                    capitalisation
                  </p>
                  <div className="updaters">
                    <span className="update-date">30 september</span>
                    <div className="updater-dott"></div>
                    <span className="updater-name">Madhurima Nandy</span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  margin: "10px 0px 10px 0px",
                  height: "2px",
                  backgroundColor: "#c1bdbd",
                }}
              />
            </div>
            <div className="d-flex">
              <div className="top-card-1-img prime">
                <div className="primium-card card-prim">
                  <button>PRIMIUM</button>
                </div>
                <img
                  src="./Imagesss/card-image-3.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                className="top-card-1-containt"
                style={{ paddingLeft: "5px" }}
              >
                <div className="top-card-1-title">
                  <h3>CONSUMER</h3>
                </div>
                <p className="top-card-1-para">
                  Exclusive: PE-backed sauce maker Wingreens acquires Lok
                  Capital-backed cereal maker
                </p>
                <div className="updaters">
                  <span className="update-date">30 september</span>
                  <div className="updater-dott"></div>
                  <span className="updater-name">Madhurima Nandy</span>
                </div>
              </div>
            </div>
            <hr
              style={{
                margin: "10px 0px 10px 0px",
                height: "2px",
                backgroundColor: "#c1bdbd",
              }}
            />
            <div className="d-flex">
              <div className="top-card-1-img">
                <img
                  src="./Imagesss/card-image-4.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                className="top-card-1-containt"
                style={{ paddingLeft: "5px" }}
              >
                <div className="top-card-1-title">
                  <h3>ECONOMY</h3>
                </div>
                <p className="top-card-1-para">
                  GLOBAL MARKETS-European shares in the red after hawkish Fed
                  comments
                </p>
                <div className="updaters">
                  <span className="update-date">30 september</span>
                  <div className="updater-dott"></div>
                  <span className="updater-name">Madhurima Nandy</span>
                </div>
              </div>
            </div>
            <hr
              style={{
                margin: "10px 0px 10px 0px",
                height: "2px",
                backgroundColor: "#c1bdbd",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
