import React from "react";
import "./page.css";
import OverviewComp from "./sections/overview/Overview.component";
import Stats from "./sections/stats/Stats.component";
const Page = () => {
	return (
		<div className="page">
			<div className="components">
				<OverviewComp />
				<Stats />
			</div>
		</div>
	);
};

export default Page;
