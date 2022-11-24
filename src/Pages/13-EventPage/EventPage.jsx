import React from "react";
import CardEvent from "../../Components/CardEvent/CardEvent";

const EventPage = () => {
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
          <div className="col">
            <CardEvent
              image="https://picsum.photos/200/300"
              title="Event 1"
              date="12-12-2021"
              location="Jakarta"
            />
          </div>
          <div className="col">
            <CardEvent
              image="https://picsum.photos/200/300"
              title="Event 1"
              date="12-12-2021"
              location="Jakarta"
            />
          </div>
          <div className="col">
            <CardEvent
              image="https://picsum.photos/200/300"
              title="Event 1"
              date="12-12-2021"
              location="Jakarta"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
