import React from 'react'

const TemplateDetailContentWithVideo = ({ title, description, video }) => {
  return (
    <>
        <div className="p-5 detail-content">
            <h3 className="content-h3 text-center" data-title={title}>{title}</h3>
            <div className="card-img-top p-2 card-image w-75 mx-auto d-block my-3">
              <iframe width="560" height="315" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="w-100" data-description={description}>{description}</p>
        </div>
    </>
  )
}

export default TemplateDetailContentWithVideo