import React from 'react'

const ListAside = ({no, title, isActive, onClick}) => {
  return (
    <>
        <li className={`list-span ${isActive ? "active" : ""}`} data-list={no} onClick={onClick}>{no ? no+".": ""} {title}</li>
    </>
  )
}

export default ListAside