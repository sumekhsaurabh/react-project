import { useState, useRef } from "react";
import { FiChevronRight } from "react-icons/fi";

function AboutCard(props) {
  let [data, setData] = useState([]);
  const carousel = useRef(null);
  data = props.data;
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
        <div className="About-card d-flx-jc-sb">
          <div>
          <h3 className="limited-partner ">{props.heading}</h3>
          <h3 className="limited-partner merger-full ">{props.header}</h3>
          <h3 className="limited-partner merger-short">{props.smallheading}</h3>
          </div>
          <div className="About-view-more">
            View more{" "}
            <span>
              {" "}
              <FiChevronRight className="arrow" />
            </span>{" "}
          </div>
        </div>
        <div className="carousel" ref={carousel}>
          {data.map((item) => {
            const { name, id } = item;
            return (
              <div className="item" key={id} style={props.boxSize}>
                <div className="About-image">
                  <div
                    className="primium-card about-premium"
                    style={props.primStyle}
                  >
                    <button>PRIMIUM</button>
                  </div>
                  <img src={item.image} alt="" style={props.imageStyle} />
                </div>
                <div className="About-para" style={props.paraStyle}>
                  {item.para}
                </div>
                <div className=" update-section" style={props.updateSection}>
                  <span className=" About-update-date" style={props.updatedate}>
                    30 september
                  </span>
                  <div
                    className="About-updater-dott"
                    style={props.updateSec3}
                  ></div>
                  <span className="About-updater-name" style={props.updateSec2}>
                    Madhurima Nandy
                  </span>
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
        <div className="About-line w-90" style={props.display}></div>
      </div>
    </div>
  );
}

export default AboutCard;
