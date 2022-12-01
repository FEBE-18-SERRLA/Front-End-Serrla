import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "Redux/Actions/event";
import CardEvent from "../../Components/CardEvent/CardEvent";

const EventPage = () => {
  const data = useSelector((state) => state.event.events);
  const like = useSelector((state) => state.event.like);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

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
              <div className="col-md-4" key={index}>
                <CardEvent
                  image={item.image}
                  title={item.name}
                  date={item.date}
                  location={item.location}
                  like={like}
                  onClick={() => dispatch(getEvents())}
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
