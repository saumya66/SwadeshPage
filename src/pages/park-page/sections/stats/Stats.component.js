import React from "react";
import LocationHighlight from "./loc-highlights/LocationHighlight.component";
import InvestHighlight from "./invest-highlights/InvestHighlight.component";
import FloorPlan from "./floor-plan/FloorPlan.component";
import Modal from "./modal/Modal.component";
import "./stats.css";

const Button = (props) => {
	return (
		<button className="reports-btn">
			<p className="report-name">{props.name}</p>
			<i className="fa fa-arrow-down" />
		</button>
	);
};

const Stats = () => {
	return (
		<div className="stats">
			<div className="stats-col-one">
				<InvestHighlight />
				<Modal />
				<LocationHighlight />
				<FloorPlan />
			</div>
			<div className="stats-col-two">
				<div className="overview-cont">
					<h5 className="overview-heading">Overview</h5>
					<p className="overview-desc">
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
							ultricies elementum dictum laoreet accumsan. Commodo nisi arcu
							amet, eget ut donec. Urna egestas felis at lectus morbi vulputate
							pellentesque in. Dictum pellentesque neque, non scelerisque
							tortor, ut. Ut id congue sem ut ornare.
						</span>

						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
							ultricies elementum dictum laoreet accumsan. Commodo nisi arcu
							amet, eget ut donec. Urna egestas felis at lectus morbi vulputate
							pellentesque.
						</span>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
							ultricies elementum dictum laoreet accumsan. Commodo nisi arcu
							amet, eget ut donec. Urna egestas felis at lectus morbi vulputate
							pellentesque.
						</span>
					</p>
				</div>
				<div className="reports-cont">
					<h5 className="reports-heading">Reports</h5>
					<div className="reports-download">
						<Button name="Download Investment Report" />
						<Button name="Download Title Report" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
