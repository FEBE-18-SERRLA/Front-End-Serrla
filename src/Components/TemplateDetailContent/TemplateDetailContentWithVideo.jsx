import React from "react";
import PropTypes from "prop-types";

const TemplateDetailContentWithVideo = ({ title, description, video }) => {
  const srcVideo = video.replace("watch?v=", "embed/");

  return (
    <>
      <div className="p-5 detail-content">
        <h3 className="content-h3 text-center" data-title={title}>
          {title}
        </h3>
        <div className="card-img-top p-2 card-image">
          <iframe
            className="mx-auto d-block"
            width="760"
            height="428"
            src={srcVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="w-100 mt-4"
          data-description={description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </>
  );
};

TemplateDetailContentWithVideo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

export default TemplateDetailContentWithVideo;
