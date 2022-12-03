import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardQuiz({ image, title, id }) {
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
            Quiz {title}
          </h5>
          <p className={`${module["pertanyaan"]} mt-3`}>10 Pertanyaan</p>
          <p className="pw-normal" style={{ fontSize: "18px" }}>
            Quiz Pilihan ganda mengenai {title}
          </p>
          <div className="container-button-card d-flex justify-content-between">
            <Link to={`/quiz/1`} className="btn-kembali-quiz">
              Mulai Quiz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

CardQuiz.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
export default CardQuiz;
