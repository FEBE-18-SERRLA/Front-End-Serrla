import React from "react";

import "./CardPortfolio.css";
const CardPortfolio = ({ name, imageProfile, media, title, description }) => {
  return (
    <>
      <div className="card">
        <img
          src={media}
          className={`card-img-top p-2 ${module["card-image"]}`}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title fw-semibold" style={{ fontSize: "18px" }}>
            {title}
          </h5>
          <p className={`${module["date"]} mt-3`}>
            <img
              src={imageProfile}
              alt="profile"
              style={{ width: "32px", height: "32px" }}
              className="rounded-circle"
            />
            <span className="d-inline-block ms-2 m-0">{name}</span>
          </p>
          <p className="pw-normal" style={{ fontSize: "18px" }}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardPortfolio;
