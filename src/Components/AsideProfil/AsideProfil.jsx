import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdVpnKey } from "react-icons/md";
const AsideProfil = () => {
  return (
    <>
      <aside>
        <div className="container my-5">
          <nav>
            <ul className="flex-column p-0">
              <li className="nav-item nav-item-dashboard">
                <Link to="/profil" className="nav-link active fw-semibold">
                  <CgProfile />
                  <span className="text-dashboard ps-2">Profil</span>
                </Link>
              </li>
              <li className="nav-item nav-item-dashboard">
                <Link to="/profil/katasandi" className="nav-link fw-semibold">
                  <MdVpnKey />
                  <span className="text-dashboard ps-2">Katasandi</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AsideProfil;
