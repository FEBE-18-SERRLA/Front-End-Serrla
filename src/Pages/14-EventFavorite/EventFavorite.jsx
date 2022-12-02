import React, { useEffect } from "react";
import AsideDashboard from "Components/AsideDashboard/AsideDashboard";
import axios from "axios";
import CardEvent from "Components/CardEvent/CardEvent";
import { getEventFavorites } from "Redux/Actions/event";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneHeart } from "react-icons/ai";
import Swal from "sweetalert2";

const EventFavorite = () => {
  const dispatch = useDispatch();
  const { eventFavorites, isloading, like } = useSelector(
    (state) => state.event
  );

  useEffect(() => {
    dispatch(getEventFavorites());
  }, []);

  const handleClick = (eventId) => {
    let id = localStorage.getItem("id");
    axios.delete(
      `https://serrla-api.up.railway.app/users/${id}/favorites/${eventId}`
    );
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Event berhasil dihapus dari favorit",
    }).then(() => {
      dispatch(getEventFavorites());
    });
  };
  return (
    <main>
      <div className="container mb-5">
        <div className="row my-4 gx-5">
          <div
            className="col-3 rounded shadow"
            style={{ backgroundColor: "#FDFAF3" }}
          >
            <AsideDashboard />
          </div>
          <div className="col-9">
            <section>
              <article className="container">
                <h4 className="fw-bold modul-heading">Event Favorite</h4>
                <div className="row mx-auto gy-3 my-3">
                  {isloading ? (
                    <span className="visually-hidden">Loading...</span>
                  ) : (
                    eventFavorites?.map((item, index) => {
                      return (
                        <div className="col-sm-6" key={item.id}>
                          <CardEvent
                            image={item.event.image}
                            title={item.event.name}
                            date={item.event.date}
                            location={item.event.location}
                            style={{ width: "20rem" }}
                            like={like}
                            onClick={() => handleClick(item.id)}
                            childern={
                              <AiTwotoneHeart className="text-danger fs-3" />
                            }
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventFavorite;
