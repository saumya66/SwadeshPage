import "./modal.css";
import StatComponent from "../../../components/stat-component/Stat.component";

const capitalHighlight = () => {
	const ar = [1, 2, 3, 4, 5];
	const rowNames = [
		"capitalment",
		"Lease Deposit",
		"Rents",
		"Sales Value",
		"Total",
	];
	return (
		<div className="modal">
			<h5 className="modal-heading">Financial Modal</h5>
			<div className="modal-stats">
				<table>
					<thead>
						<tr>
							<th>{"     "}</th>
							<th>Day 1</th>
							<th>Year 1 </th>
							<th>Year 2</th>
							<th>Year 3</th>
							<th>Year 4</th>
							<th>Year 5</th>
						</tr>
					</thead>
					<tbody className="table-body">
						{rowNames.map((name) => (
							<tr>
								<td className="row-name">{name}</td>
								<td>12,338</td>
								<td>12,338</td>
								<td>12,338</td>
								<td>12,338</td>
								<td>12,338</td>
								<td>12,338</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="capital-cont">
				<p className="capital-text">Capital appreciation</p>
				<div className="capital-input">
					<i className="fa fa-percent" aria-hidden="true" />

					<input type="text" />
				</div>
			</div>
		</div>
	);
};

export default capitalHighlight;
