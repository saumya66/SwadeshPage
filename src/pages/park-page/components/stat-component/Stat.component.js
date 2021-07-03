import "./stat.css";

import React from "react";

const Stat = (props) => {
	return (
		<div className="stat">
			<h5 className="stat-value">{props.value}</h5>
			<p className="stat-desc">{props.name}</p>
		</div>
	);
};

export default Stat;
