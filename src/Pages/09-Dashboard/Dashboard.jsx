import React, { useEffect, useState } from "react";
import axios from "axios";

import { Gambar6 } from "../../Assets";
import CardModulDashborad from "Components/CardModulDashboard/CardModulDashborad";
import AsideDashboard from "Components/AsideDashboard/AsideDashboard";

import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserByIdSuccess } from "Redux/Actions/user";
import { getModul } from "Redux/Actions/modulActions";
import { getModulDashboard } from "Redux/Actions/dahsboard";

const Dashboard = () => {
  const { data } = useSelector((state) => state.user.user);
  const [isloading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const { modulDashboard, isLoading } = useSelector((state) => state.dashboard);

  console.log("modulDashboard", modulDashboard);
  useEffect(() => {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    dispatch(getModul());
    if (token) {
      axios
        .get(`https://serrla-api.up.railway.app/users/${id}`)
        .then((res) => {
          dispatch(getUserByIdSuccess(res.data));
          setIsloading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    dispatch(getModulDashboard());
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
                    {isLoading ? (
                      <span>Loading........</span>
                    ) : (
                      modulDashboard?.map((item) => {
                        console.log("item", item);
                        return (
                          <CardModulDashborad
                            gambar={item.course.image}
                            namaModul={item.course.name}
                            id={item.course.id}
                            namaButton="Lanjutkan Belajar"
                          />
                        );
                      })
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
