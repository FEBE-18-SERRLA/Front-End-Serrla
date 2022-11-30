import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gambar3 } from "../../Assets";
import InputText from "../../Components/InputText/InputText";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/Actions/userActions";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispacth = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.password2.value) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password tidak sama!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Daftar Berhasil!",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          dispacth(
            signUp({
              first_name: namaDepan,
              last_name: namaBelakang,
              email: email,
              password: password,
            })
          );
          navigate("/sign-in");
        }
      });
    }
  };

  return (
    <>
      <section className="section-container">
        <div className="container container-signup">
          <div className="row border shadow">
            <div className="col-md-6 left">
              <h2
                className="text-center pw-semibold mt-4"
                style={{ fontSize: "36px", color: "#E9D0BA" }}
              >
                Halo... Sobat Seni
              </h2>
              <p className="text-center pw-light" style={{ fontSize: "16px" }}>
                Isi data dirimu dengan melengkapi form ini untuk bergabung
                bersama kami
              </p>
              <img
                src={Gambar3}
                alt=""
                className="img-fluid mx-auto d-block"
                width="350"
              />
            </div>
            <div className="col-md-6 right">
              <h2
                className="text-center pw-semibold mt-4"
                style={{ fontSize: "32px" }}
              >
                Daftar
              </h2>
              <form className="mx-3 needs-validation" onSubmit={handleSubmit}>
                <InputText
                  valueLabel="Nama Depan"
                  valueFor="nama-depan"
                  type="text"
                  id="nama-depan"
                  name="nama-depan"
                  placeholder="Masukkan Nama Depan"
                  value={namaDepan}
                  onChange={(e) => setNamaDepan(e.target.value)}
                />
                <InputText
                  valueLabel="Nama Belakang"
                  valueFor="nama-belakang"
                  type="text"
                  id="nama-belakang"
                  name="nama-belakang"
                  placeholder="Masukkan Nama Belakang"
                  value={namaBelakang}
                  onChange={(e) => setNamaBelakang(e.target.value)}
                />
                <InputText
                  valueLabel="Email"
                  valueFor="email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Masukkan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputText
                  valueLabel="Katasandi"
                  valueFor="password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Masukkan Katasandi"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputText
                  valueLabel="Konfirmasi Katasandi"
                  valueFor="password2"
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Konfirmasi Katasandi"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-sign-up">
                  Daftar
                </button>
                <p className="text-center mt-2">
                  Sudah punya akun? <Link to="/sign-in">Masuk</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
