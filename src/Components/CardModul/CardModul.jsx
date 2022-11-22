import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import module from "./CardModul.module.css";

const CardModul = ({ title, image, descript, category, id, style }) => {
  return (
    <>
      <div className="swiper-slide">
        <div className="card" style={style}>
          <img
            src={image}
            className={`card-img-top p-2 ${module["card-image"]}`}
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title" style={style}>
              {title}
            </h5>
            <p className={`text-end fw-light ${module["kategori"]}`}>
              Kategori: {category}
            </p>
            <p className={`${module["card-text"]} pw-normal`}>{descript}</p>
            <Link
              to={`/modul/detail-modul/${id}`}
              className={`btn ${module["btn-card"]}`}
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

CardModul.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  style: PropTypes.object,
};
export default CardModul;
