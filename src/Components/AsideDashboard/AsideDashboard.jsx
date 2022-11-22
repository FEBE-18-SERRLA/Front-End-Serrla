import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { IoIosFolderOpen } from "react-icons/io";

import { PlaceholderUser } from "../../Assets";

import "./AsideDashboard.css";

const AsideDashboard = () => {
  return (
    <>
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
                    to="/dashboard"
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
    </>
  );
};

export default AsideDashboard;
