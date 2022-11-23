import React from "react";

import { Gambar6 } from "../../Assets";
import CardModulDashborad from "Components/CardModulDashboard/CardModulDashborad";
import AsideDashboard from "Components/AsideDashboard/AsideDashboard";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <main>
        <div className="container mb-5">
          <div className="row my-4 gx-5">
            <div
              className="col-3 rounded shadow p-0"
              style={{ backgroundColor: "#FDFAF3" }}
            >
              <AsideDashboard />
            </div>
            <div className="col-9">
              <section>
                <div className="container">
                  <article className="container d-flex align-items-center rounded container-header-dashboard">
                    <div className="container px-sm-5">
                      <h1 className="fw-bold text-header-dashboard">
                        Hallo, Nama user!
                      </h1>
                      <p className="text-content-dashboard">
                        Semoga aktivitas belajarmu menyenangkan.
                      </p>
                    </div>
                  </article>
                  <article className="container mt-5">
                    <h4 className="fw-bold title-dashboard">Lanjutkan Modul</h4>
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
