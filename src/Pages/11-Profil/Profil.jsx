import React, { useEffect, useState } from "react";
import AsideProfil from "Components/AsideProfil/AsideProfil";

import { BsPencilFill } from "react-icons/bs";
import { PlaceholderUser } from "../../Assets";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUserByIdSuccess } from "Redux/Actions/user";
import { getSchool } from "Redux/Actions/school";
import { useSelector } from "react-redux";

const Profil = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user.user);
  const school = useSelector((state) => state.school.school.data);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    if (token) {
      axios
        .get(`https://tesbe-production.up.railway.app/users/${id}`)
        .then((res) => {
          dispatch(getUserByIdSuccess(res.data));
          setIsloading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    dispatch(getSchool());
  }, []);

  return (
    <>
      <main>
        <div style={{ backgroundColor: "#f2f2f2" }}>
          <h2 className="py-4 fw-semibold container">
            <BsPencilFill /> Edit Profil
          </h2>
        </div>
        <div className="container mb-5">
          <div className="row my-4 gx-5">
            <div
              className="col-3 rounded shadow"
              style={{ backgroundColor: "#FDFAF3" }}
            >
              <AsideProfil />
            </div>
            <div className="col-9">
              <section>
                <article
                  className="container p-4 rounded shadow"
                  style={{ backgroundColor: "#FDFAF3" }}
                >
                  <div className="container">
                    <h4 className="fw-bold">Detail Profil</h4>
                    <form>
                      <p>Foto Profil</p>
                      <div className="row align-items-center g-3">
                        <div className="img col-md-3">
                          <img
                            src={isloading ? data.picture : PlaceholderUser}
                            alt="Foto Profil"
                            width="100px"
                            className="d-inline-block align-text-top rounded-circle"
                          />
                        </div>
                        <div className="button px-3 col-md-9">
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "#005387",
                              color: "#fff",
                            }}
                          >
                            Ganti Foto
                          </button>
                        </div>
                      </div>
                      <div className="row container mt-3 g-2">
                        <div className="col-md">
                          <div className="mb-3">
                            <label
                              htmlFor="nama-depan"
                              className="form-label fw-semibold"
                            >
                              Nama Depan
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="nama-depan"
                              placeholder="Nama-Depan"
                              defaultValue={isloading ? data.first_name : ""}
                            />
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="mb-3">
                            <label
                              htmlFor="nama-belakang"
                              className="form-label fw-semibold"
                            >
                              Nama Belakang
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="nama-belakang"
                              placeholder="Nama Belakang"
                              defaultValue={isloading ? data.last_name : ""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row container mt-3 g-2">
                        <div className="col-md">
                          <div className="mb-3">
                            <label
                              htmlFor="email"
                              className="form-label fw-semibold"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="email"
                              defaultValue={isloading ? data.email : ""}
                            />
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="mb-3">
                            <label
                              htmlFor="sekolah"
                              className="form-label fw-semibold"
                            >
                              Sekolah
                            </label>
                            <select
                              name="sekolah"
                              id="sekolah"
                              className="form-select form-select mb-3"
                            >
                              <option selected>--Pilih Sekolah--</option>
                              {isloading &&
                                school.map((item, index) => {
                                  return (
                                    <option value={item.id} key={index}>
                                      {item.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row container mt-3 g-2">
                        <div className="col-md">
                          <div className="mb-3">
                            <label
                              htmlFor="jenis-kelamin"
                              className="form-label fw-semibold"
                            >
                              Jenis Kelamin
                            </label>
                            <div className="radio">
                              <input
                                type="radio"
                                id="laki-laki"
                                name="jenis-kelamin"
                                value="laki-laki"
                              />
                              <label htmlFor="laki-laki" className="px-2">
                                Laki-laki
                              </label>
                              <input
                                type="radio"
                                id="perempuan"
                                name="jenis-kelamin"
                                value="perempuan"
                              />
                              <label htmlFor="perempuan" className="ps-2">
                                Perempuan
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="mb-3">
                            <label
                              htmlFor="no-telp"
                              className="form-label fw-semibold"
                            >
                              No. Telp
                            </label>
                            <input
                              type="tel"
                              pattern="^\d{3}-\d{3}-\d{4}$"
                              className="form-control"
                              id="no-telp"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row container mt-3 g-2">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="tanggal-lahir"
                              className="form-label fw-semibold"
                            >
                              Tanggal Lahir
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="tanggal-lahir"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 text-end">
                        <button
                          type="submit"
                          className="btn"
                          style={{ backgroundColor: "#005387", color: "#fff" }}
                        >
                          Simpan
                        </button>
                      </div>
                    </form>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profil;
