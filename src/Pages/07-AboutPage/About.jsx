import React from "react";
import {
  VectorOval2,
  VectorOval,
  Logo,
  IbnuPic,
  RafidPic,
  RovinPic,
  MarcelPic,
  NolaPic,
} from "../../Assets";

import module from "./About.module.css";

export default function About() {
  return (
    <main>
      <section className={module["section-1"]}>
        <div className="container">
          <div className="row g-4 p-5">
            <div className={`col-md-8 ${module.col8}`}>
              <h4 className="fw-normal">Tentang Serrla</h4>
              <h2 className="fw-semibold my-3">Apa Sih Serrla Itu?</h2>
              <p>
                Serrla (Serrum Learning Art) adalah aplikasi yang bergerak di
                bidang pendidikan seni dan budaya. Serrla membantu anak muda
                dalam mengenal dan mempelajari seni melalui materi dan video
                pembelajaran yang menarik dan interaktif oleh pemateri.
              </p>
            </div>
            <div
              className={`col-md-4 d-flex align-items-center justify-content-center ${module.col4}`}
            >
              <img
                src={Logo}
                alt="Logo Serrla"
                className="img-fluid"
                width="120px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={module["section-2"]}>
        <div className={`row mx-auto ${module["container-row"]}`}>
          <div className={`col-md-6 p-5 ${module["left"]}`}>
            <img
              src={VectorOval}
              alt="vector-oval"
              className={module.vector1}
              width="100px"
              height="50px"
            />
            <h2 className="text-center mb-5 bg-transparent">
              Background Story
            </h2>
            <p className="fw-light">
              Kurangnya paparan seni dan budaya di sekolah dan belum adanya
              platform untuk memfasilitasi anak muda mempelajari seni dan budaya
              berbasis proyek , anak muda menjadi sulit untuk mencari
              pengetahuan dan pembelajaran tentang seni budaya dan mengembangkan
              ketertarikan, minat, bakat, dan potensinya dalam bidang seni dan
              budaya.
            </p>
          </div>
          <div className={`col-md-6 ${module.right} p-5 `}>
            <img
              src={VectorOval2}
              alt=""
              className={module.vector2}
              width="100px"
              height="50px"
            />
            <h2 className="text-center mb-5 bg-transparent">Our Goal</h2>
            <p className="fw-light">
              Sebuah platform digital untuk anak muda agar bisa mendapatkan
              informasi dan pengetahuan yang cukup tentang seni dan budaya agar
              bisa mengembangkan ketertarikan, minat, dan bakatnya masing-masing
            </p>
          </div>
        </div>
      </section>

      <section className={module["section-3"]}>
        <div className="container py-5">
          <h2 className="text-center">Meet the Team</h2>
          <hr className="w-25 m-0 mb-5 mx-auto" />
          <h4 className="text-center mb-4">Front-end Developers</h4>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <figure>
                <img
                  src={IbnuPic}
                  alt="Ibnu Choldun"
                  width="150px"
                  className="d-block mx-auto"
                />
                <figcaption className="text-center p-2">
                  Ibnu Choldun
                </figcaption>
              </figure>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <figure>
                <img
                  src={RafidPic}
                  alt="Rafid Ammar"
                  width="150px"
                  className="d-block mx-auto"
                />
                <figcaption className="text-center p-2">Rafid Ammar</figcaption>
              </figure>
            </div>
          </div>
          <h4 className="text-center my-5">Back-end Developers</h4>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <figure>
                <img
                  src={RovinPic}
                  alt="G. Rovinda Putra Kamajaya"
                  className="d-block mx-auto"
                  width="150px"
                />
                <figcaption className="text-center p-2">
                  G. Rovinda Putra Kamajaya
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <figure>
                <img
                  src={MarcelPic}
                  alt="Marselinus Putu Harry S."
                  className="d-block mx-auto"
                  width="150px"
                />
                <figcaption className="text-center p-2">
                  Marselinus Putu Harry S.
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <figure>
                <img
                  src={NolaPic}
                  alt="Nola Farah Azzahra"
                  width="150px"
                  className="d-block mx-auto"
                />
                <figcaption className="text-center p-2">
                  Nola Farah Azzahra
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
