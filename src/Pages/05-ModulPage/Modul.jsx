import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getFilteredModul,
  getSearchedModul,
} from "../../Redux/Actions/modulActions";
import InputRadioBtn from "../../Components/InputRadioBtn/InputRadioBtn";
import CardModul from "../../Components/CardModul/CardModul";
import useQuery from "../../Hooks/useQuery";
import "./Modul.css";

const Modul = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const { modul, isLoading } = useSelector((state) => state.modul);

  const submit = (e) => {
    e.preventDefault();
    navigate(`?q=${filter}`);
  };

  const onChangeFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  useEffect(() => {
    dispatch(getFilteredModul(query.get("q")));
  }, [query]);

  const handleSearch = (e) => {
    dispatch(getSearchedModul(e.target.value));
  };

  return (
    <div>
      <main>
        <section className="search-section">
          <h1 className="text-center fw-semibold">Modul Yang Tersedia</h1>
          <p className="text-center  container">
            Gali pengetahuan seni dengan mengikuti modul yang tersedia sesuai
            dengan minat dan bakatmu!
          </p>
          <input
            type="text"
            className="form-control input-search w-50 d-block mx-auto"
            placeholder="Cari Modul"
            aria-label="Cari Modul"
            aria-describedby="button-addon2"
            name="search"
            onChange={handleSearch}
          />
        </section>
        <section className="m-5">
          <div className="container">
            <div className="row gx-5 mx-1">
              <aside className="col-lg-3 filter-side">
                <div className="filter">
                  <h3 className="fw-semibold">Filter Modul</h3>
                  <form onSubmit={submit}>
                    <div className="filter-item">
                      <h5 className="fw-normal">Kategori</h5>
                      <InputRadioBtn
                        name={"filter"}
                        checked={filter === ""}
                        onChange={onChangeFilter}
                        label="None"
                        value={""}
                        id={"Seni_Rupa"}
                        htmlFor={"Seni_Rupa"}
                      />
                      <InputRadioBtn
                        name={"filter"}
                        checked={filter === "Seni Rupa"}
                        onChange={onChangeFilter}
                        label="Seni Rupa"
                        value={"Seni Rupa"}
                        id={"Seni_Rupa"}
                        htmlFor={"Seni_Rupa"}
                      />
                      <InputRadioBtn
                        name={"filter"}
                        checked={filter === "Seni Musik"}
                        onChange={onChangeFilter}
                        label="Seni Musik"
                        value={"Seni Musik"}
                        id={"Seni_Musik"}
                        htmlFor={"Seni_Musik"}
                      />
                      <InputRadioBtn
                        name={"filter"}
                        checked={filter === "Seni Tari"}
                        onChange={onChangeFilter}
                        label="Seni Tari"
                        value={"Seni Tari"}
                        id={"Seni_Tari"}
                        htmlFor={"Seni_Tari"}
                      />
                      <InputRadioBtn
                        name={"filter"}
                        checked={filter === "Seni Teater"}
                        onChange={onChangeFilter}
                        label="Seni Teater"
                        value={"Seni Teater"}
                        id={"Seni_Teater"}
                        htmlFor={"Seni_Teater"}
                      />
                    </div>
                    <button className="btn btn-filter mt-3">Filter</button>
                  </form>
                </div>
              </aside>
              <section className="col-lg-9 list-class-container mt-3">
                <div className="row list-modul g-3">
                  {isLoading ? (
                    <span>Loading........</span>
                  ) : modul.length > 0 ? (
                    modul.map((item) => {
                      return (
                        <div key={item.id} className="col">
                          <CardModul
                            title={item.title}
                            image={item.image}
                            descript={item.descript}
                            category={item.category}
                            id={item.id}
                            style={{ width: "15rem", fontWeight: "400" }}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-center fs-4">Modul Tidak Ditemukan</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Modul;
