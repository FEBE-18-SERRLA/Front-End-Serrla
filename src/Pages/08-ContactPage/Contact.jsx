import React from "react";
import module from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <main>
        <h2 class={` ${module["heading"]} text-center p-5 fw-semibold`}>
          Contact
        </h2>
        <section class="contact-us">
          <div
            class={`${module["container-contact"]} container my-5 rounded-5`}
          >
            <div class="row p-5">
              <div class="col-md text-center">
                <h4 class="fw-semibold">
                  <i class="bi bi-geo-alt"></i> Alamat{" "}
                </h4>
                <p class="fw-light">
                  Jl. Durian Raya No. 30A, RT. 4/RW. 4 Jagakarsa, Jakarta
                  Selatan, Daerah Khusus Ibukota Jakarta 12620
                </p>
              </div>
              <div class="col-md text-center">
                <h4 class="fw-semibold">
                  <i class="bi bi-telephone"></i> Telepon
                </h4>
                <p class="fw-light">(021) 29517702</p>
              </div>
              <div class="col-md text-center">
                <h4 class="fw-semibold">
                  <i class="bi bi-envelope"></i> Email
                </h4>
                <p class="fw-light">info@serrla.com</p>
              </div>
            </div>
            <div class={module["mapouter"]}>
              <div class={module["gmap_canvas"]}>
                <iframe
                  title="map"
                  class={module["gmap_iframe"]}
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
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
