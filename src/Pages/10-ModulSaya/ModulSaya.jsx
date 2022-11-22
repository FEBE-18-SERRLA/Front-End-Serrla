import React from "react";

import AsideDashboard from "Components/AsideDashboard/AsideDashboard";
import CardModulDashborad from "Components/CardModulDashboard/CardModulDashborad";

import { Gambar6 } from "../../Assets";

const ModulSaya = () => {
  return (
    <>
      <main>
        <div className="container mb-5">
          <div className="row my-4 gx-5">
            <div
              className="col-3 rounded shadow"
              style={{ backgroundColor: "#FDFAF3" }}
            >
              <AsideDashboard />
            </div>
            <div className="col-9">
              <section>
                <article class="container">
                  <h4 class="fw-bold modul-heading">Modul Saya</h4>
                  <nav class="mt-3">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        class="nav-link active text-black"
                        id="nav-semua-modul-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-semua-modul"
                        type="button"
                        role="tab"
                        aria-controls="nav-semua-modul"
                        aria-selected="true"
                      >
                        Semua Modul
                      </button>
                      <button
                        class="nav-link text-black"
                        id="nav-sedang-dipelajari-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-sedang-dipelajari"
                        type="button"
                        role="tab"
                        aria-controls="nav-sedang-dipelajari"
                        aria-selected="true"
                      >
                        Sedang Dipelajari
                      </button>
                      <button
                        class="nav-link text-black"
                        id="nav-selesai-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-selesai"
                        type="button"
                        role="tab"
                        aria-controls="nav-selesai"
                        aria-selected="false"
                      >
                        Selesai
                      </button>
                    </div>
                  </nav>
                  <CardModulDashborad
                    gambar={Gambar6}
                    namaModul="Modul 1"
                    namaButton="Lanjutkan Belajar"
                  />
                  <CardModulDashborad
                    gambar={Gambar6}
                    namaModul="Modul 2"
                    namaButton="Review Materi"
                  />
                  <CardModulDashborad
                    gambar={Gambar6}
                    namaModul="Modul 3"
                    namaButton="Review Materi"
                  />
                </article>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ModulSaya;
