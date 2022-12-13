import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getSearchedEvent } from "Redux/Actions/event";
import CardEvent from "../../Components/CardEvent/CardEvent";
import { AiOutlineHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import "./EventPage.css";

const EventPage = () => {
  const data = useSelector((state) => state.event.events);
  const like = useSelector((state) => state.event.like);
  const isLoading = useSelector((state) => state.event.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const handleClick = (eventId) => {
    let id = localStorage.getItem("id");
    axios.post(`https://serrla-api.up.railway.app/users/${id}/favorites`, {
      event_id: eventId,
    });
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Event berhasil ditambahkan ke favorit",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSearch = (e) => {
    dispatch(getSearchedEvent(e.target.value));
  };

  return (
    <div>
      <h2
        className="text-center p-4 fw-semibold"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        Event Seni
      </h2>
      <input
        type="text"
        className="form-control search-event w-50 d-block mx-auto"
        placeholder="Cari Event"
        aria-label="Cari Event"
        aria-describedby="button-addon2"
        name="search"
        onChange={handleSearch}
      />
      <div className="container my-5">
        <div className="row gy-3 mx-auto">
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : data.length > 0 ? (
            data.map((item) => {
              return (
                <div className="col-md-4" key={item.id}>
                  <CardEvent
                    image={item.image}
                    title={item.name}
                    date={item.date}
                    time={item.time}
                    location={item.location}
                    locationUrl={item.loc_url}
                    like={like}
                    onClick={() => handleClick(item.id)}
                    childern={<AiOutlineHeart className="fs-3" />}
                  />
                </div>
              );
            })
          ) : (
            <div className="d-flex justify-content-center">
              <h3 className="fw-semibold">Event tidak ditemukan</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
