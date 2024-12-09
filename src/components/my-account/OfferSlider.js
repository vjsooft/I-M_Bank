import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import data from '../../json-file/data.json'

const OfferSlider = () => {
  return (
    <div className="row banner-slider">
      <div className="col-sm-12">
        <h1 className="offer">View Offers</h1>
        <p>Redeem using your points and gain access to offers!</p>
      </div>
      <div className="col-sm-12">
      
        <Carousel interval={2000} autoPlay={true} infiniteLoop={true} >
          {data.sliderImg.map((item) => (
            <div key={item.id}>
              <img src={item.slideImg} alt={item.alt} title={item.slideTit} />
              <div className="slider-content">
                <h4>{item.slideTit}</h4>
                <Link to={item.slideLink} className={item.slideBtnCls}>{item.slideBtn}</Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OfferSlider;
