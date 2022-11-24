import React from "react";
import AsideDashboard from "Components/AsideDashboard/AsideDashboard";
import CardEvent from "Components/CardEvent/CardEvent";

const EventFavorite = () => {
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
                  <div className="col-sm-6">
                    <CardEvent
                      image="https://picsum.photos/200/300"
                      title="Event 1"
                      date="12-12-2021"
                      location="Jakarta"
                      style={{ width: "20rem" }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <CardEvent
                      image="https://picsum.photos/200/300"
                      title="Event 1"
                      date="12-12-2021"
                      location="Jakarta"
                      style={{ width: "20rem" }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <CardEvent
                      image="https://picsum.photos/200/300"
                      title="Event 1"
                      date="12-12-2021"
                      location="Jakarta"
                      style={{ width: "20rem" }}
                    />
                  </div>
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
