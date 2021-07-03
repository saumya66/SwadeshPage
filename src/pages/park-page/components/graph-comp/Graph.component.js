import "./graph.css";
import React from "react";

const Graph = (Props) => {
	return (
		<div className="graph">
			<h5 className="graph-stat">{Props.value}</h5>
			<div className="graph-box">
				<div className="graph-level">
					<p className="y-value">20</p>
				</div>
				<div className="graph-level">
					<p className="y-value">10</p>
				</div>
				<div className="graph-level">
					<div className="graph-bar"></div>
					<p className="y-value">0</p>
				</div>
			</div>
			<h5 className="graph-name">{Props.name}</h5>
		</div>
	);
};

export default Graph;
