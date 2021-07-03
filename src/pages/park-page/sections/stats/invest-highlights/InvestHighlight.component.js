import "./invest-highlight.css";
import StatComponent from "../../../components/stat-component/Stat.component";
import { useState } from "react";

const investmentStats = {
	price: "12,338",
	rentalYeild: "6.5%",
	yearEscalation: "6%",
	location: "100%",
};
const InvestHighlight = () => {
	const [investmentState, setInvestmentState] = useState(investmentStats);
	return (
		<div className="invest-highlights">
			<h5 className="invest-heading">Investment Highlights</h5>
			<div className="invest-stats">
				<div className="stat-1">
					<StatComponent
						name="attractive price"
						value={investmentState.price}
					/>
				</div>
				<div className="stat-2">
					<StatComponent
						name="rental yeild"
						value={investmentState.rentalYeild}
					/>
				</div>
				<div className="stat-3">
					<StatComponent
						name="year escalation"
						value={investmentState.yearEscalation}
					/>
				</div>
				<div className="stat-4">
					<StatComponent name="location" value={investmentState.location} />
				</div>
			</div>
		</div>
	);
};

export default InvestHighlight;
