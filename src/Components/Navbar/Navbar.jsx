import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, PlaceholderUser } from "../../Assets";
import "./Navbar.css";

const Navbar = () => {
  const isLogin = localStorage.getItem("user");
  const user = JSON.parse(isLogin);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg p-2 nav-header">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src={Logo}
              alt="Logo"
              width="50px"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            {isLogin === null ? (
              <>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item h5 m-0">
                    <Link to="/" className="nav-link nav-text fw-normal">
                      Beranda
                    </Link>
                  </li>
                  <li className="nav-item h5 m-0">
                    <Link to="/about" className="nav-link nav-text fw-normal">
                      Tentang
                    </Link>
                  </li>
                  <li className="nav-item h5 m-0">
                    <Link to="/contact" className="nav-link nav-text fw-normal">
                      Kontak
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item h5 me-3">
                    <Link to="/sign-in" className="nav-link sign-in fw-normal">
                      Masuk
                    </Link>
                  </li>
                  <li className="nav-item h5">
                    <Link to="/sign-up" className="nav-link sign-up fw-normal">
                      Daftar
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item h5 m-0">
                    <Link to="/" className="nav-link nav-text fw-normal">
                      Beranda
                    </Link>
                  </li>
                  <li className="nav-item h5 m-0">
                    <Link to="/modul" className="nav-link nav-text fw-normal">
                      Modul
                    </Link>
                  </li>
                  <li className="nav-item h5 m-0">
                    <Link
                      to="/dashboard"
                      className="nav-link nav-text fw-normal"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <div className="dropdown text-end">
                    <Link
                      to=""
                      className="d-block link-dark text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={PlaceholderUser}
                        alt="mdo"
                        width="32"
                        height="32"
                        className="rounded-circle"
                      />
                      <p className="d-inline-block ms-2 m-0 text-light">
                        {user.nama_depan + " " + user.nama_belakang}
                      </p>
                    </Link>
                    <ul className="dropdown-menu text-small">
                      <li>
                        <Link to="/profil" className="dropdown-item">
                          Lihat Profil
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Keluar
                        </button>
                      </li>
                    </ul>
                  </div>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
