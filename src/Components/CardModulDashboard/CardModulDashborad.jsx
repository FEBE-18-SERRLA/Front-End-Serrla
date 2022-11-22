import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardModulDashborad = ({ gambar, namaModul, id, namaButton }) => {
  return (
    <>
      <div
        className="d-flex p-4 rounded shadow justify-content-between my-3"
        style={{ backgroundColor: "#FDFAF3" }}
      >
        <div className="d-flex justify-content-between">
          <img src={gambar} alt="gambar modul" width="70" />
          <p className="px-3 my-auto">{namaModul}</p>
        </div>
        <div className="button">
          <Link
            to={`/modul/detail-modul/${id}`}
            className="btn"
            style={{ backgroundColor: "#005387", color: "#fff" }}
          >
            {namaButton}
          </Link>
        </div>
      </div>
    </>
  );
};

CardModulDashborad.propTypes = {
  gambar: PropTypes.string.isRequired,
  namaModul: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  namaButton: PropTypes.string.isRequired,
};

export default CardModulDashborad;
