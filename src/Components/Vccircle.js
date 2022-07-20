import { useState, useRef } from "react";
import datas from "./vccircleData";

export default function Vccircle() {
  let [data, setData] = useState([]);
  const carousel = useRef(null);
     data = datas;
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  if (!data || !data.length) return null;

  return (
    <div>
      <div className="primium-container-body w-f">
        <div className="main-container w-90">
          <div className="About-card d-flx-jc-sb">
            <h3 className="limited-partner color">
              VCCircle Premium
              <img src="./imagesss/crown.png" alt="" />
            </h3>
            <button className="primium-subscribe-btn">SUBSCRIBE</button>
          </div>
          <div className="carousel" ref={carousel}>
            {data.map((item) => {
              const { title, id, para } = item;
              return (
                <div className="primium-item" key={id}>
                  <div className="primiums-image">
                  <div className="primium-card primium-prime"><button>PREMIUM</button></div>
                    <img src={item.image} alt="" />
                  </div>
                  <div className="primiums-About-title">{title}</div>
                  <div className="primiums-About-para">{para}</div>
                  <div className="date">
                    <div className="update new-update">
                      <span className="update-date new-section">
                        30 september
                      </span>
                      <div className="updater-dott"></div>
                      <span className="updater-name">Madhurima Nandy</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-f d-flx-jc-cen">
            <button className="mobile-btn">SUBSCRIBE</button>
          </div>
          <div className="btns">
            <button onClick={handleLeftClick} id="btns-1" className="dis-none">
              <img src="./imagesss/right-arrow.png" alt="Scroll Left" className="crousal-btn-style" />
            </button>
            <button onClick={handleRightClick} id="btns-2" className="dis-none">
              <img src="./imagesss/right-arrow.png" alt="Scroll Left" className="crousal-btn-style" />
            </button>
          </div>
        </div>
      </div>
        </div>
    
  );
}
