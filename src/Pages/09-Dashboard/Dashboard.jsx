import React from "react";

import { Gambar6 } from "../../Assets";
import CardModulDashborad from "Components/CardModulDashboard/CardModulDashborad";
import AsideDashboard from "Components/AsideDashboard/AsideDashboard";

const Dashboard = () => {
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
                <div className="container">
                  <article
                    className="container d-flex align-items-center rounded"
                    style={{ backgroundColor: "#FDF5E8", height: "200px" }}
                  >
                    <div className="container px-5">
                      <h1 className="fw-bold">Hallo, Nama user!</h1>
                      <p>Semoga aktivitas belajarmu menyenangkan.</p>
                    </div>
                  </article>
                  <article className="container mt-5">
                    <h4 className="fw-bold">Lanjutkan Modul</h4>
                    <CardModulDashborad
                      gambar={Gambar6}
                      namaModul="Modul 1"
                      namaButton="Lanjutkan Belajar"
                    />
                    <CardModulDashborad
                      gambar={Gambar6}
                      namaModul="Modul 2"
                      namaButton="Lanjutkan Belajar"
                    />
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
