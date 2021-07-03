import React from "react";
import "./overview.css";
import buildingImage from "../../../../assets/building.png";
import buildingThumb from "../../../../assets/building-thumb.png";
import Stat from "../../components/stat-component/Stat.component";
import { useState } from "react";

const headStats = {
	parkName: "Brigade Park",
	location: "Outer Ring Road, Bangalore",
	rent: "12,338",
	ownership: "100%",
};

const OverviewComp = () => {
	const num = [1, 2, 3, 4, 5, 6];
	const [homeState, setHomeState] = useState(headStats);
	return (
		<div className="overview">
			<div className="images-col">
				<img className="responsive main-img" src={buildingImage} alt="" />
				<div className="building-pics">
					{num.map((i) => (
						<img className="more-img" src={buildingThumb} alt="" />
					))}
				</div>
			</div>
			<div className="headstats-col">
				<h5 className="park-name">{homeState.parkName}</h5>
				<div className="cont1">
					<i className="fa fa-map-marker"></i>

					<p className="location">{homeState.location}</p>
				</div>
				<div className="percentage-range">
					<input type="range" min="0" max="100" value="75"></input>
					<p className="funded">75% funded</p>
				</div>

				<div className="invest-amt">
					<h5 className="invest-text">Investment amount</h5>
					<div className="invest-cont">
						<i className="fa fa-rupee"></i>

						<input className="invest-input" type="text" />
					</div>
					<div className="stat-numbers">
						<div className="stat-one">
							<Stat name="montly rent" value={homeState.rent} />
						</div>
						<div className="stat-two">
							<Stat name="ownership" value={homeState.ownership} />
						</div>
					</div>
					<button className="invest-btn">
						{/* <div className="btn-cont"> */}
						<p className="invest-now">Invest now</p>
						<i className="fa fa-arrow-right"></i>
						{/* </div> */}
					</button>
				</div>
			</div>
		</div>
	);
};

export default OverviewComp;
