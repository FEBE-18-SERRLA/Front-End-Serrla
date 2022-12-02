import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredModul,
  getModul,
  getSearchedModul,
} from "../../Redux/Actions/modulActions";
import InputRadioBtn from "../../Components/InputRadioBtn/InputRadioBtn";
import CardModul from "../../Components/CardModul/CardModul";
import "./Modul.css";

const Modul = () => {
  const [filter, setFilter] = useState("");
  const modul = useSelector((state) => state.modul.modul);
  const isLoading = useSelector((state) => state.modul.isLoading);
  const [tracks, setTracks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModul());
    getTracks();
  }, [dispatch]);

  const getTracks = async () => {
    const res = await fetch("https://serrla-api.up.railway.app/tracks");
    const json = await res.json();
    setTracks(json.data);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(getFilteredModul(filter));
  };

  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = (e) => {
    dispatch(getSearchedModul(e.target.value));
  };

  // const set = new Set(modul)

  return (
    <div>
      <main>
        <section className="search-section">
          <h1 className="text-center fw-semibold">Modul Yang Tersedia</h1>
          <p className="text-center">
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
                        checked={filter === "all"}
                        onChange={onChangeFilter}
                        label="Semua"
                        value="all"
                        id={"Seni_Rupa"}
                        htmlFor={"Seni_Rupa"}
                      />
                      {tracks.map((track) => (
                        <InputRadioBtn
                          key={track.id}
                          name="filter"
                          checked={Number(filter) === Number(track.id)}
                          onChange={onChangeFilter}
                          label={track.name}
                          value={track.id}
                          id={String(track.name)
                            .replace(" ", "-")
                            .toLowerCase()}
                          htmlFor={String(track.name)
                            .replace(" ", "-")
                            .toLowerCase()}
                        />
                      ))}
                    </div>
                    <button className="btn btn-filter mt-3">Filter</button>
                  </form>
                </div>
              </aside>
              <section className="col-lg-9 list-class-container mt-3">
                <div className="row list-modul g-3">
                  {isLoading ? (
                    <span>Loading........</span>
                  ) : (
                    modul.map((item) => {
                      return (
                        <div key={item.id} className="col">
                          <CardModul
                            title={item.name}
                            image={item.image}
                            descript={item.description ?? "ssfa"}
                            category={item.track.name}
                            id={`${item.id}`}
                            style={{
                              width: "15rem",
                              fontWeight: "400",
                            }}
                          />
                        </div>
                      );
                    })
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
