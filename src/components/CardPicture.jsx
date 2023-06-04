import React, { Component } from "react";
function CardPicture(props) {
const data = props.data

  return (
    <>
      <div className="row">
        {data?.map((img)=>(
                <div className="col-lg-3 col-md-4 col-sm-6" key={img.id}>
                <div className="card mb-1 fade-in">
                  <div className="img-listCard">
                    <img
                      src={img.image}
                      className="card-img-top"
                      alt="..."
                    />
                        <div className="overlayGallery">
                            <p>{img.name}</p>
                        </div>
                  </div>
                  <p className="card-text-mobile text-center p-1 fs-4">{img.name}</p>
                </div>
              </div>
        ))}
    
      </div>
    </>
  );
}

export default CardPicture;
