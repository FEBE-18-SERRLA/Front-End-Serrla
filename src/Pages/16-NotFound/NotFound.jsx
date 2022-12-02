import React from "react";
import { Link } from "react-router-dom";
import { VectorOval } from "../../Assets";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="row vh-100">
              <div className="col-12 my-auto position-relative">
                <img src={VectorOval} alt="Vector" className="vector1" />
                <img src={VectorOval} alt="Vector" className="vector2" />
                <img src={VectorOval} alt="Vector" className="vector3" />
                <img src={VectorOval} alt="Vector" className="vector4" />
                <h1 className="text-center fw-bolder error-code">404</h1>
                <h2 className="text-center fw-bolder error-description">
                  Oops, Halaman Tidak Ditemukan
                </h2>
                <p className="text-center error-description2">
                  Halaman yang Anda cari mungkin telah dihapus, diubah namanya,
                  atau sementara tidak tersedia.
                </p>
                <div className="text-center">
                  <Link
                    to="/"
                    className="btn"
                    style={{ backgroundColor: "#005387", color: "#fff" }}
                  >
                    {" "}
                    ← <span className="ps-2">Kembali ke Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;
