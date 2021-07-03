import "./modal.css";
import StatComponent from "../../../components/stat-component/Stat.component";
import Graph from "../../../components/graph-comp/Graph.component";
import { useState } from "react";
const ar = [1, 2, 3, 4, 5];
const rowNames = [
	"capitalment",
	"Lease Deposit",
	"Rents",
	"Sales Value",
	"Total",
];
const graphsInfo = [
	{
		value: "1.12x",
		name: "MOIC",
	},
	{
		value: "18.5",
		name: "Total IRR",
	},
	{
		value: "12,338",
		name: "Sale price psf",
	},
	{
		value: "12,338",
		name: "Profit amount",
	},
];
const Modal = () => {
	const [data, setData] = useState(graphsInfo);
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
			<div className="graph-container">
				{data.map((singleData) => (
					<Graph name={singleData.name} value={singleData.value} />
				))}
			</div>
		</div>
	);
};

export default Modal;
