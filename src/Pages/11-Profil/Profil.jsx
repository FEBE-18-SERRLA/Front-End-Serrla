import React, { useEffect, useRef, useState } from "react";
import AsideProfil from "Components/AsideProfil/AsideProfil";

import { BsPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUserByIdSuccess } from "Redux/Actions/user";
import { getSchool } from "Redux/Actions/school";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Profil = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user.user);
  const school = useSelector((state) => state.school.school.data);
  const [isloading, setIsloading] = useState(false);
  const form = useRef(null);
  const editUploadImage = useRef(null);
  const imageProfile = useRef(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    if (token) {
      axios
        .get(`https://serrla-api.up.railway.app/users/${id}`)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = form.current;
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    if (token) {
      axios
        .put(
          `https://serrla-api.up.railway.app/users/${id}`,
          {
            first_name: formData.firstName.value,
            last_name: formData.lastName.value,
            email: formData.email.value,
            telp: Number(formData.telp.value),
            birthdate: formData.birthDate.value,
            picture: formData.picture.value,
            school_id: formData.school.value,
            gender: formData.gender.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Profil berhasil diubah",
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch(getUserByIdSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const previewImage = () => {
    const file = editUploadImage.current.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      imageProfile.current.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

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
                    <form ref={form}>
                      <p>Foto Profil</p>
                      <div className="row align-items-center g-3">
                        <div className="img col-md-3">
                          <img
                            src={data?.picture}
                            alt="Foto Profil"
                            width="100px"
                            height="100px"
                            className="d-inline-block align-text-top rounded-circle"
                            ref={imageProfile}
                          />
                        </div>
                        <div className="button px-3 col-md-9">
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "#005387",
                              color: "#fff",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              editUploadImage.current.click();
                            }}
                          >
                            Ganti Foto
                          </button>
                        </div>
                        <input
                          type="file"
                          className="d-none form-control"
                          ref={editUploadImage}
                          onChange={() => previewImage()}
                          name="picture"
                        />
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
                              name="firstName"
                              defaultValue={data?.first_name}
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
                              name="lastName"
                              defaultValue={data?.last_name}
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
                              name="email"
                              defaultValue={data?.email}
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
                              name="school"
                              id="sekolah"
                              className="form-select form-select mb-3"
                              aria-label="Default select example"
                            >
                              <option value={data?.school_id}>
                                {data?.school?.name}
                              </option>
                              {isloading &&
                                school?.map((item, index) => {
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
                              htmlFor="gender"
                              className="form-label fw-semibold"
                            >
                              Jenis Kelamin
                            </label>
                            <select
                              name="gender"
                              id="gender"
                              className="form-select form-select mb-3"
                              aria-label="Default select example"
                              required
                            >
                              <option>{data?.gender}</option>
                              <option value="Laki-laki">Laki-laki</option>
                              <option value="Perempuan">Perempuan</option>
                            </select>
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
                              type="string"
                              className="form-control"
                              id="no-telp"
                              name="telp"
                              required
                              defaultValue={data?.telp}
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
                              name="birthDate"
                              required
                              defaultValue={data?.birthdate}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 text-end">
                        <button
                          type="submit"
                          className="btn"
                          style={{ backgroundColor: "#005387", color: "#fff" }}
                          onClick={handleSubmit}
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
