import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdVpnKey } from "react-icons/md";
const AsideProfil = () => {
  return (
    <>
      <aside>
        <div className="container my-5">
          <nav>
            <ul className="flex-column p-0">
              <li className="nav-item">
                <NavLink
                  to="/profil/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-dashboard fw-semibold nav-item-dashboard"
                      : "nav-link fw-semibold nav-item-dashboard"
                  }
                >
                  <CgProfile />
                  <span className="text-dashboard ps-2">Profil</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/profil/katasandi"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-dashboard fw-semibold nav-item-dashboard"
                      : "nav-link fw-semibold nav-item-dashboard"
                  }
                >
                  <MdVpnKey />
                  <span className="text-dashboard ps-2">Katasandi</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AsideProfil;
