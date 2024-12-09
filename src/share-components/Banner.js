import React from 'react';
import { useLocation } from 'react-router-dom';
import data from '../json-file/data.json'; 

function Banner() {
  const location = useLocation();
  const path = location.pathname.substr(1);
  const banner = data.bannerImage[path];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0">
          {
            banner == null ? null :
              <img
              src={banner?.img}
              alt={banner?.alt}
              title={banner?.title}
              className="img-fluid"
            />
          }          
        </div>
      </div>
    </div>
  );
}

export default Banner;
