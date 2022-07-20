import React from "react";

export default function Vcc() {
  return (
    <div>
      <div className="vcc w-f d-flx-jc-cen">
        <div className="vcc-inner w-90">
          <div className="vcc-inner-content">
            <div className="vcc-header d-flx-jc-sb">
              <h3 className="vcc-heading">VCC TV</h3>
              <p className="vcc-para">View More</p>
            </div>
            <div className="vcc-content d-flx-jc-sb">
              <div className="vcc-box-1">
                <iframe
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "14px",
                  }}
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                ></iframe>
              </div>
              <div className="vcc-box-2s">
                <h4 className="vcc-box-2-heading">HEALTHCARE</h4>
                <h3 className="vcc-box-2-title">
                  How can we harness data for healthcare and safegaurd ourselves
                  from cyber threats?
                </h3>
                <p className="vcc-box-2-para">
                  The global healthcare data is expected to grow at a CAGR of
                  36% by 2025. To make healthcare more equitable, affordable and
                  accessible, there is a need to find ways to unite and generate
                  actionable insights from data. How collaborations and
                  strategic partnerships can harness the data to tackle the
                  issues faced by the sector?
                </p>
                <div className=" update-section-tv">
                  <span className=" tv-update-date">30 september</span>
                  <div className="tv-updater-dott"></div>
                  <span className="tv-updater-name">Madhurima Nandy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
