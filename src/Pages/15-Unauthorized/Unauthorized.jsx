import React from "react";
import { Link } from "react-router-dom";
import { VectorOval } from "../../Assets";
import "./Unauthorized.css";

const Unauthorized = () => {
  return (
    <>
      <>
        <main>
          <section>
            <div className="container">
              <div className="row vh-100">
                <div className="col-12 my-auto position-relative">
                  <img src={VectorOval} alt="vector" className="vector1" />
                  <img src={VectorOval} alt="vector" className="vector2" />
                  <img src={VectorOval} alt="vector" className="vector3" />
                  <img src={VectorOval} alt="vector" className="vector4" />
                  <h1 className="text-center fw-bolder error-code">401</h1>
                  <h2 className="text-center fw-bolder error-description">
                    Oops, Kamu tidak dapat mengakses halaman ini
                  </h2>
                  <p className="text-center">Silakan masuk terlebih dahulu</p>
                  <div className="text-center">
                    <Link
                      to="/sign-in"
                      className="btn"
                      style={{ backgroundColor: "#005387", color: "#fff" }}
                    >
                      Masuk
                    </Link>
                    <Link
                      to="/"
                      className="btn ms-3"
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
    </>
  );
};

export default Unauthorized;
