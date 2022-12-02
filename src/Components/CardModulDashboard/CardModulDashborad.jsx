import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardModulDashborad = ({ gambar, namaModul, id, namaButton }) => {
	return (
		<>
			<div
				className="row p-4 rounded shadow justify-content-between my-3 gy-2"
				style={{ backgroundColor: "#FDFAF3" }}
			>
				<div className="col-md-9">
					<div className="d-flex">
						<img
							src={gambar}
							alt="gambar modul"
							width="70"
							height="70"
						/>
						<p className="px-3 my-auto">{namaModul}</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="button text-end">
						<Link
							to={`/modul/detail-modul/${id}`}
							className="btn w-100"
							style={{
								backgroundColor: "#005387",
								color: "#fff",
							}}
						>
							{namaButton}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

CardModulDashborad.propTypes = {
	gambar: PropTypes.string.isRequired,
	namaModul: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	namaButton: PropTypes.string.isRequired,
};

export default CardModulDashborad;
