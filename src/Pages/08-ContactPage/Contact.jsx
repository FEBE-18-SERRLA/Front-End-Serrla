import React from "react";
import module from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <main>
        <h2 className={` ${module["heading"]} text-center p-5 fw-semibold`}>
          Kontak
        </h2>
        <section className="contact-us">
          <div
            className={`${module["container-contact"]} container my-5 rounded-5`}
          >
            <div className="row p-5">
              <div className="col-md text-center">
                <h4 className="fw-semibold">
                  <i className="bi bi-geo-alt"></i> Alamat{" "}
                </h4>
                <p className="fw-light">
                  Jl. Durian Raya No. 30A, RT. 4/RW. 4 Jagakarsa, Jakarta
                  Selatan, Daerah Khusus Ibukota Jakarta 12620
                </p>
              </div>
              <div className="col-md text-center">
                <h4 className="fw-semibold">
                  <i className="bi bi-telephone"></i> Telepon
                </h4>
                <p className="fw-light">(021) 29517702</p>
              </div>
              <div className="col-md text-center">
                <h4 className="fw-semibold">
                  <i className="bi bi-envelope"></i> Email
                </h4>
                <p className="fw-light">info@serrla.com</p>
              </div>
            </div>
            <div className={module["mapouter"]}>
              <div className={module["gmap_canvas"]}>
                <iframe
                  title="map"
                  className={module["gmap_iframe"]}
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Jl. Durian Raya No. 30A, RT. 4/RW. 4 Jagakarsa, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620  &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://piratebay-proxys.com/">Pirate proxy</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
