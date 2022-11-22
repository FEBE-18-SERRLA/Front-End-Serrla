import React from 'react'

const TemplateDetailContent = ({image, title, description}) => {
  return (
    <>
        <div className="p-5 detail-content">
            <h3 className="content-h3 text-center" data-title={title}>{title}</h3>
            <img src={image} data-image={image} className="card-img-top p-2 card-image w-75 mx-auto d-block my-3" alt={title}/>
            <p className="w-100" data-description={description}>{description}</p>
        </div>
    </>
  )
}

export default TemplateDetailContent