import React, { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import PropTypes from "prop-types";
import module from "./CardEvent.module.css";

const CardEvent = ({ image, title, date, location }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="card">
        <img
          src={image}
          className={`card-img-top p-2 ${module["card-image"]}`}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title fw-semibold" style={{ fontSize: "18px" }}>
            {title}
          </h5>
          <p className={`${module["date"]} mt-3`}>{date}</p>
          <p className="pw-normal" style={{ fontSize: "18px" }}>
            {location}
          </p>
          <div className="container-button-card d-flex justify-content-between">
            <a
              href="https://serrum.id/"
              className={`btn ${module["btn-card-event"]}`}
              target="_blank"
              rel="noreferrer"
            >
              ikut
            </a>
            <button className="btn btn-like" onClick={handleLike}>
              {like ? (
                <AiTwotoneHeart className="text-danger fs-3" />
              ) : (
                <AiOutlineHeart className="fs-3" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CardEvent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default CardEvent;
