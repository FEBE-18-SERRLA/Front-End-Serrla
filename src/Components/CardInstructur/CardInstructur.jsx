import React from "react";
import PropTypes from "prop-types";
import module from "./CardInstructur.module.css";

const CardInstructur = ({ name, descript, image }) => {
	return (
		<>
			<div className="swiper-slide">
				<div
					className="card"
					style={{ width: "20rem", height: "350px" }}
				>
					<img
						src={image}
						className={`card-img-top ${module["img-instructur"]} pt-3 mx-auto d-block rounded-circle`}
						alt={name}
					/>
					<div className="card-body">
						<h5 className="card-title text-center">{name}</h5>
						<p
							className={`${module["card-description"]} pw-normal`}
						>
							{descript}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

CardInstructur.propTypes = {
	name: PropTypes.string.isRequired,
	descript: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default CardInstructur;
