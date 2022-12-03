import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "Redux/Actions/event";
import CardEvent from "../../Components/CardEvent/CardEvent";
import { AiOutlineHeart } from "react-icons/ai";
import Swal from "sweetalert2";

const EventPage = () => {
  const data = useSelector((state) => state.event.events);
  const like = useSelector((state) => state.event.like);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

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

  return (
    <>
      <h2
        className="text-center p-4 fw-semibold"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        Event Seni
      </h2>
      <div className="container my-5">
        <div className="row gy-3 mx-auto">
          {data.map((item, index) => {
            return (
              <div className="col-md-4" key={item.id}>
                <CardEvent
                  image={item.image}
                  title={item.name}
                  date={item.date}
                  location={item.location}
                  like={like}
                  onClick={() => handleClick(item.id)}
                  childern={<AiOutlineHeart className="fs-3" />}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventPage;
