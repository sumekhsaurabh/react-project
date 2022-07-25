import { useState, useRef } from "react";
import Carddatas from "./eventsData.js";

export default function Events() {
  let [data, setData] = useState([]);
  const carousel = useRef(null);

  data = Carddatas;
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
    <div className="container-body w-f">
      <div className="main-container w-90">
        <div className="destop-v">
          <div className="About-card d-flx-jc-sb">
            <h3 className="limited-partner">Upcoming Events</h3>
            <div className="About-view-more">View more</div>
          </div>
          <div className="carousel" ref={carousel}>
            {Carddatas.map((item) => {
              const { para, image, title, id } = item;
              return (
                <div className="events-items" key={id}>
                  <div className="event-content d-flx">
                    <div className="event-image">
                      <img src={image} alt="" />
                    </div>
                    <div className="event-content">
                      <h3 className="event-content-title">{title}</h3>
                      <p className="event-content-para">{para}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btns">
            <button onClick={handleLeftClick} id="btns-1" className="dis-none">
              <img
                src="./Imagesss/right-arrow.png"
                alt="Scroll Left"
                className="crousal-btn-style"
              />
            </button>
            <button onClick={handleRightClick} id="btns-2" className="dis-none">
              <img
                src="./Imagesss/right-arrow.png"
                alt="Scroll Left"
                className="crousal-btn-style"
              />
            </button>
          </div>
        </div>

        <div className="mob-ver d-flx-jc-cen m-20">
          <div className="mob-event d-flx">
            <div className="mob-event-img">
              <img src="./Imagesss/event-1.png" alt="" />
            </div>
            <div className="mob-content">
              <h4 className="mob-content-title">4 October 2021</h4>
              <h2 className="mob-content-heading">
                Limited Partners <br /> Summit 2022
              </h2>
              <p className="mob-content-para">
                Hyatt Regency, New Delhi | New Hybrid Masterclass
              </p>
            </div>
          </div>
        </div>
        <div className="mob-ver d-flx-jc-cen m-20">
          <div className="mob-event d-flx">
            <div className="mob-event-img">
              <img src="./Imagesss/event-2.png" alt="" />
            </div>
            <div className="mob-content">
              <h4 className="mob-content-title">4 October 2021</h4>
              <h2 className="mob-content-heading">
              Cloud- The Digital <br />Infrastructure
              </h2>
              <p className="mob-content-para">
                Hyatt Regency, New Delhi | New Hybrid Masterclass
              </p>
            </div>
          </div>
        </div>

        <div className="mob-ver d-flx-jc-cen">
          <div className="mob-event d-flx">
            <div className="mob-event-img">
              <img src="./Imagesss/event-3.png" alt="" />
            </div>
            <div className="mob-content">
              <h4 className="mob-content-title">4 October 2021</h4>
              <h2 className="mob-content-heading">
              SEMINAR - FUTURE OF <br />TRUST
              </h2>
              <p className="mob-content-para">
                Hyatt Regency, New Delhi | New Hybrid Masterclass
              </p>
            </div>
          </div>
        </div>
        <div className="About-line w-90"></div>
      </div>
    </div>
  );
}
