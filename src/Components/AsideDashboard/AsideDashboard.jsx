import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { IoIosFolderOpen } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

import { PlaceholderUser } from "../../Assets";

import "./AsideDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserByIdSuccess } from "Redux/Actions/user";

const AsideDashboard = () => {
  const { data } = useSelector((state) => state.user.user);
  const [isloading, setIsloading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
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
      <aside>
        <div className="container">
          <div className="container text-center my-4 container-img-user">
            <img
              src={data?.picture}
              alt="placeholder user"
              className="rounded-circle"
              width="80"
            />
            <p className="fw-normal pt-3">
              {data?.first_name + " " + data?.last_name}
            </p>
          </div>
          <div className="container my-5">
            <ul className="flex-column text-center p-0">
              <li className="nav-item">
                <NavLink
                  to="/dashboard/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-dashboard fw-semibold nav-item-dashboard"
                      : "nav-link fw-semibold nav-item-dashboard"
                  }
                >
                  <ImHome />
                  <span className="text-dashboard ps-2">Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dashboard/event-favorite"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-dashboard fw-semibold nav-item-dashboard"
                      : "nav-link fw-semibold nav-item-dashboard"
                  }
                >
                  <MdFavorite />
                  <span className="text-dashboard ps-2">Event Favorite</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideDashboard;
