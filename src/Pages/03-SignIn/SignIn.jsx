import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { signIn } from "../../Redux/Actions/authActions";
import { Gambar4 } from "../../Assets";
import InputText from "../../Components/InputText/InputText";
import "./SignIn.css";

const SignIn = () => {
  const clientId =
    "1051427066530-j8fjqpmrdnt48riasbe024q3kc2uvijr.apps.googleusercontent.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispacth = useDispatch();

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId: clientId,
      });
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(signIn(email, password));
  };

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
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
                <form className="" onSubmit={handleSubmit}>
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
                    valueLabel="Kata sandi"
                    valueFor="password"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Masukkan Kata sandi"
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
                <div className="btn-google text-center">
                  <GoogleLogin
                    clientId={clientId}
                    buttonText="Masuk dengan Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    style={{
                      marginTop: "100px",
                      width: "100%",
                    }}
                    isSignedIn={true}
                  />
                </div>
                <p className="mt-2 text-center">
                  Belum punya akun? <Link to="/sign-up">Daftar</Link>
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
