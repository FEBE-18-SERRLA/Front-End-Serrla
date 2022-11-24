import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Logo } from "../../Assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-4">
            <img
              src={Logo}
              alt="Logo"
              width="70px"
              className="d-inline-block align-text-top"
            />
            <h4 className="footer-text pw-semibold h4 py-2">
              Serrum Learning Art
            </h4>
            <p className="pw-light">
              Gali minat dan bakatmu bersama Serrla dengan pemateri yang handal
              di bidangnya
            </p>
          </div>
          <div className="col-md-2">
            <h5 className="footer-text pw-semibold mb-3">Modul</h5>
            <ul className="p-0">
              <li className="mt-2 list-decoration-none">
                <Link to="/modul?q=Seni%20Rupa" className="pw-light nav-link">
                  Seni Rupa
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/modul?q=Seni%20Musik" className="pw-light nav-link">
                  Seni Musik
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/modul?q=Seni%20Tari" className="pw-light nav-link">
                  Seni Tari
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/modul?q=Seni%20Teater" className="pw-light nav-link">
                  Seni Teater
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="footer-text pw-semibold mb-3">Tentang Kami</h5>
            <ul className="p-0">
              <li className="mt-2">
                <Link to="/about" className="pw-light nav-link">
                  Tentang
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="footer-text pw-semibold mb-3">Hubungi Kami</h5>
            <ul className="p-0">
              <li className="mt-2">
                <a href="#" className="pw-light nav-link">
                  (021) 12345678
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="pw-light nav-link">
                  info@serrla.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="footer-text pw-semibold mb-3">Sosial Media</h5>
            <ul className="p-0 d-flex">
              <li className="m-2 ">
                <a href="#" className="pw-light nav-link">
                  <FaTwitter style={{ fontSize: "1.5rem" }} />
                </a>
              </li>
              <li className="m-2">
                <a href="#" className="pw-light nav-link">
                  <FaFacebook style={{ fontSize: "1.5rem" }} />
                </a>
              </li>
              <li className="m-2">
                <a href="#" className="pw-light nav-link">
                  <FaInstagram style={{ fontSize: "1.5rem" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center m-0 pb-3">Copyright © 2022 Serrla</p>
    </footer>
  );
};

export default Footer;
