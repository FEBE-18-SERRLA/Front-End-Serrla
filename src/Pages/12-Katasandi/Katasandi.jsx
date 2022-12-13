import React from "react";
import { BsPencilFill } from "react-icons/bs";
import AsideProfil from "Components/AsideProfil/AsideProfil";

const Katasandi = () => {
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
                    <h4 className="fw-bold">Ubah Kata sandi</h4>
                    <form className="mt-3">
                      <div className="mb-3">
                        <label
                          for="katasandi-lama"
                          className="form-label fw-semibold"
                        >
                          Katasandi Lama
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="katasandi-lama"
                          placeholder="Kata sandi Lama"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="katasandi-baru"
                          className="form-label fw-semibold"
                        >
                          Kata sandi Baru
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="katasandi-baru"
                          placeholder="Kata sandi Baru"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="konfirmasi-katasandi"
                          className="form-label fw-semibold"
                        >
                          Konfirmasi Kata sandi
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="konfirmasi-katasandi"
                          placeholder="Konfirmasi Kata sandi"
                        />
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

export default Katasandi;
