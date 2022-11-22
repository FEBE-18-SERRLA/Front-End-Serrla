import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../Redux/Actions/userActions";
import { Gambar4, Google } from "../../Assets";
import InputText from "../../Components/InputText/InputText";
import Swal from "sweetalert2";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(signIn(email, password));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const findUser = user.find(
      (item) => item.email === email && item.password === password
    );
    if (findUser) {
      localStorage.setItem("user", JSON.stringify(findUser));
      Swal.fire({
        icon: "success",
        title: "Berhasil Masuk",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email atau Password Salah!",
      });
    }
  };
  return (
    <>
      <section className="section-signin">
        <div className="container container-signin">
          <div className="row border shadow">
            <div className="col-md-6 left-signin order-sm-first order-last">
              <div className="container">
                <h2
                  className="text-center pw-semibold mt-4"
                  style={{ fontSize: "32px" }}
                >
                  Masuk
                </h2>
                <form className="mx-3" onSubmit={handleSubmit}>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-sign-in mt-5 text-center"
                  >
                    Masuk
                  </button>
                </form>
                <p className="my-2 text-center">atau</p>
                <button
                  type="submit"
                  className="btn bg-light w-100 text-center"
                >
                  <img src={Google} alt="" width="25" />
                  Masuk Dengan Akun Google
                </button>
                <p className="mt-2 text-center">
                  Belum punya akun? <Link to="/sign-up">Sign Up</Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 right-signin">
              <div className="container justify-content-center">
                <h2
                  className="text-center pw-bold mt-5"
                  style={{ fontSize: "32px", color: "#E9D0BA" }}
                >
                  Selamat Datang Di Serrla!
                </h2>
                <p
                  className="text-center pw-light"
                  style={{ fontSize: "16px" }}
                >
                  Untuk tetap terhubung dengan kami, Masuk menggunakan akun yang
                  sudah terdaftar
                </p>
                <img
                  src={Gambar4}
                  alt=""
                  className="img-fluid mx-auto d-block"
                  width="440"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
