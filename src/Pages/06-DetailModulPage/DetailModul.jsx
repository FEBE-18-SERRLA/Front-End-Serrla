import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ListAside from "../../Components/ListAside/ListAside";
import { getDetailModul } from "../../Redux/Actions/modulActions";
import TemplateDetailContent from "../../Components/TemplateDetailContent/TemplateDetailContent";
import TemplateDetailContentWithVideo from "../../Components/TemplateDetailContent/TemplateDetailContentWithVideo";
import "./DetailModul.css";

const DetailModul = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { contents } = useSelector((state) => state.modul.modul);
  const response = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getDetailModul(id));
    setLoading(true);
  }, []);

  const handleClickAside = (e) => {
    const { title, description, image, video } =
      contents[e.target.dataset.list - 1];
    if (video) {
      response.current.innerHTML = ReactDOMServer.renderToString(
        <TemplateDetailContentWithVideo
          title={title}
          description={description}
          image={image}
          video={video}
        />
      );
    } else {
      response.current.innerHTML = ReactDOMServer.renderToString(
        <TemplateDetailContent
          title={title}
          description={description}
          image={image}
        />
      );
    }
    const list = document.querySelectorAll(".list-span");
    list.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <div>
      <section className="detail-modul">
        <div className="container-fluid">
          <div className="row">
            <aside className="p-4 aside-daftar col-md-4">
              <div className="container-daftar">
                <h3 className="daftar">Daftar Materi</h3>
                <ul className="list">
                  {contents &&
                    contents.map((item, index) => {
                      return (
                        <ListAside
                          no={index + 1}
                          title={item.title}
                          key={index}
                          onClick={handleClickAside}
                        />
                      );
                    })}
                </ul>
              </div>
            </aside>
            <div className="col-md-8" id="response">
              <div ref={response}>
                {loading &&
                  contents &&
                  contents.map((item, index) => {
                    if (index === 0) {
                      if (item.video) {
                        return (
                          <TemplateDetailContentWithVideo
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            video={item.video}
                            key={index}
                          />
                        );
                      } else {
                        return (
                          <TemplateDetailContent
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            key={index}
                          />
                        );
                      }
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailModul;
