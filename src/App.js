import React from "react";
import Page from "./pages/park-page/Page";
import "./App.css";
import logo from "./assets/Logo.png";

const App = () => {
	return (
		<div className="app">
			<img className="logo" src={logo} alt="swadesh" height="46" />
			<h5 className="heading">Brigade Tech Park</h5>
			<div className="top-background"></div>
			<Page />
		</div>
	);
};

export default App;
