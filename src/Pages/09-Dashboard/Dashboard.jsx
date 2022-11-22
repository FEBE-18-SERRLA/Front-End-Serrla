import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { IoIosFolderOpen } from "react-icons/io";

import { PlaceholderUser, Gambar6 } from "../../Assets";
import CardModulDashborad from "Components/CardModulDashboard/CardModulDashborad";

import "./Dashboard.css";

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
              <aside>
                <div className="container">
                  <div className="container text-center my-4">
                    <img
                      src={PlaceholderUser}
                      alt="placeholder user"
                      className="rounded-circle"
                      width="80"
                    />
                    <p className="fw-normal pt-3">Nama User</p>
                  </div>
                  <div className="container my-5">
                    <nav>
                      <ul className="flex-column text-center p-0">
                        <li className="nav-item nav-item-dashboard">
                          <Link
                            to=""
                            className="nav-link active fw-semibold"
                            aria-current="page"
                          >
                            <ImHome /> Dashboard
                          </Link>
                        </li>
                        <li className="nav-item nav-item-dashboard">
                          <Link
                            to="/dashboard/modul-saya"
                            className="nav-link fw-semibold"
                          >
                            <IoIosFolderOpen /> Modul Saya
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </aside>
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
                    <CardModulDashborad gambar={Gambar6} namaModul="Modul 1" />
                    <CardModulDashborad gambar={Gambar6} namaModul="Modul 2" />
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
