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
                  <CgProfile /> Profil
                </Link>
              </li>
              <li className="nav-item nav-item-dashboard">
                <Link to="/profil/katasandi" className="nav-link fw-semibold">
                  <MdVpnKey /> Katasandi
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
