import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Gambar5, Gambar6, Gambar7, Vector3, Vector4 } from "../../Assets";
import { getModul } from "../../Redux/Actions/modulActions";
import { getInstructur } from "../../Redux/Actions/instructurActions";
import CardModul from "../../Components/CardModul/CardModul";
import CardInstructur from "../../Components/CardInstructur/CardInstructur";
import "./Home.css";

import "swiper/css/navigation";
import "swiper/css";

const Home = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const dispatch = useDispatch();
  const { modul, isLoading } = useSelector((state) => state.modul);
  const { instructur } = useSelector((state) => state.instructur);

  useEffect(() => {
    dispatch(getModul());
    dispatch(getInstructur());
  }, []);

  return (
    <div>
      <main>
        <section className=" carousel-section m-5">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Gambar5}
                  className="d-block mx-auto rounded-5"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Gambar6}
                  className="d-block mx-auto rounded-5"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Gambar7}
                  className="d-block mx-auto rounded-5"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section className="list-class-section mx-4">
          <div className="container">
            <img src={Vector3} alt="" className="vector1" />
            <img src={Vector4} alt="" className="vector7" />
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <h2 className="list-class-text pw-semibold h2 bg-transparent">
                  Modul Tersedia
                </h2>
                <Link
                  to="/modul"
                  className="list-class-text pw-semibold"
                  style={{ color: "#005386" }}
                >
                  Selengkapnya
                </Link>
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
                    modul.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <CardModul
                            title={item.title}
                            image={item.image}
                            descript={item.descript}
                            category={item.category}
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

        <section className="instructur-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="instructur-text pw-semibold h2 text-center">
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
                    instructur.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <CardInstructur
                            name={item.name}
                            image={item.image}
                            descript={item.descript}
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

export default Home;
