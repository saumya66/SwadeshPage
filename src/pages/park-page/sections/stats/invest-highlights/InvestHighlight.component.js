import "./invest-highlight.css";
import StatComponent from "../../../components/stat-component/Stat.component";

const InvestHighlight = () => {
	return (
		<div className="invest-highlights">
			<h5 className="invest-heading">Investment Highlights</h5>
			<div className="invest-stats">
				<div className="stat-1">
					<StatComponent />
				</div>
				<div className="stat-2">
					<StatComponent />
				</div>
				<div className="stat-3">
					<StatComponent />
				</div>
				<div className="stat-4">
					<StatComponent />
				</div>
			</div>
		</div>
	);
};

export default InvestHighlight;
