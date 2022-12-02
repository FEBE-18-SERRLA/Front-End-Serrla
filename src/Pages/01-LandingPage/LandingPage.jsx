import React, { useEffect } from "react";
import { Gambar1, Gambar2, VectorOval, Vector2, Vector3 } from "../../Assets";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getModul } from "../../Redux/Actions/modulActions";
import { getInstructur } from "../../Redux/Actions/instructurActions";
import CardModul from "../../Components/CardModul/CardModul";
import CardInstructur from "../../Components/CardInstructur/CardInstructur";
import module from "./LandingPage.module.css";
import "swiper/css/navigation";
import "swiper/css";

const LandingPage = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const dispatch = useDispatch();
  const { modul, isLoading } = useSelector((state) => state.modul);
  const { instructur } = useSelector((state) => state.instructur);

  useEffect(() => {
    dispatch(getModul());
    dispatch(getInstructur());
  }, [dispatch]);

  return (
    <div>
      <main>
        <section
          className={`${module["hero-section"]} d-flex align-items-center`}
        >
          <img src={VectorOval} alt="" className={module["vector1"]} />
          <img src={VectorOval} alt="" className={module["vector2"]} />
          <div className="container ">
            <div
              className={`row d-flex align-items-center ${module["container-row"]}`}
            >
              <div className={`col-md-6 ${module["hero-section-text"]}`}>
                <h1 className="hero-text pw-bold h1">
                  Tingkatkan potensi kesenianmu!
                </h1>
                <p className="pw-light">
                  Gali minat dan bakatmu bersama Serrla dengan pemateri yang
                  handal di bidangnya
                </p>
                <button className={`btn ${module["btn-hero"]}`}>
                  Mulai Sekarang
                </button>
              </div>
              <div className={`col-md-6 ${module["hero-section-img"]}`}>
                <img src={Gambar1} alt="hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${module["about-section"]} d-flex align-items-center`}
        >
          <img src={VectorOval} alt="" className={module["vector3"]} />
          <img src={Vector2} alt="" className={module["vector4"]} />
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <img src={Gambar2} alt="Hero" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h1
                  className={`${module["about-text"]} pw-semibold h1 text-center pt-2`}
                >
                  Apa Sih Serrla Itu?
                </h1>
                <p className="pw-light">
                  Serrla (Serrum Learning Art) adalah aplikasi yang bergerak di
                  bidang pendidikan seni dan budaya. Serrla membantu siswa dalam
                  mengenal dan mempelajari seni melalui materi dan video
                  pembelajaran interaktif oleh pemateri.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={module["list-class-section"]}>
          <img src={Vector3} alt="" className={module["vector5"]} />
          <img src={Vector3} alt="" className={module["vector6"]} />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className={`${module["list-class-text"]} pw-semibold h2`}>
                  Gabung Bersama Kami
                </h2>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="swiper">
                <Swiper
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    769: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {isLoading ? (
                    <span>Loading........</span>
                  ) : (
                    modul?.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <CardModul
                            title={item.name}
                            image={item.image}
                            descript={item.description}
                            category={item.track.name}
                            id={item.id}
                            style={{ width: "18rem" }}
                          />
                        </SwiperSlide>
                      );
                    })
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className={module["instructur-section"]}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2
                  className={`${module["instructur-text"]} pw-semibold h2 text-center`}
                >
                  Pemateri
                </h2>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="swiper">
                <Swiper
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    769: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {isLoading ? (
                    <span>Loading........</span>
                  ) : (
                    instructur?.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <CardInstructur
                            name={item.name}
                            image={item.picture}
                            descript={item.bio}
                          />
                        </SwiperSlide>
                      );
                    })
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
