import React, { useEffect, useState } from "react";
import axios from "axios";

import { Gambar6 } from "../../Assets";
import CardModulDashborad from "Components/CardModulDashboard/CardModulDashborad";
import AsideDashboard from "Components/AsideDashboard/AsideDashboard";

import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserByIdSuccess } from "Redux/Actions/user";
import { getModul } from "Redux/Actions/modulActions";
import CardModul from "../../Components/CardModul/CardModul";

const Dashboard = () => {
  const { data } = useSelector((state) => state.user.user);
  const [isloading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const { modul, setModul } = useSelector((state) => state.modul);

  console.log(modul)
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    dispatch(getModul());
    if (token) {
      axios
        .get(`https://tesbe-production.up.railway.app/users/${id}`)
        .then((res) => {
          dispatch(getUserByIdSuccess(res.data));
          setIsloading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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
                        Hallo, {data?.first_name + " " + data?.last_name}
                      </h1>
                      <p className="text-content-dashboard">
                        Semoga aktivitas belajarmu menyenangkan.
                      </p>
                    </div>
                  </article>
                  <article className="container mt-5">
                    <h4 className="fw-bold title-dashboard">Modul Mu</h4>
                    {setModul ? (
                    <span>Loading........</span>
                  ) : modul?.length > 0 ? (
                    modul?.map((item) => {
                      return (
                        <CardModulDashborad
                          gambar={item.image}
                          namaModul={item.name}
                          id={item.id}
                          namaButton="Lanjutkan Belajar"
                        />
                        );
                    })
                  ) : (
                    <p className="text-center fs-4">Modul Tidak Ditemukan</p>
                  )}
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
