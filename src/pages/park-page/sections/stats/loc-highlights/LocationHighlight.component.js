import "./location-highlight.css";
import { Map, GoogleApiWrapper } from "google-maps-react";
import React from "react";
import { useState, useEffect } from "react";

export const LocationHighlight = (props) => {
	let mapStyle = {};

	var x = window.matchMedia("(max-width: 900px)");
	if (x.matches) {
		// If media query matches
		mapStyle = {
			position: "absolute",
			width: "90%",
			height: "22rem",
		};
	} else {
		mapStyle = {
			position: "absolute",
			width: "63%",
			height: "22rem",
		};
	}

	return (
		<div className="map-location">
			<h5 className="location-heading">Location highlights</h5>
			<div className="cont1" style={{ marginBottom: "1rem" }}>
				<i className="fa fa-map-marker" style={{ margin: "0 1rem" }}></i>
				<p className="location">Outer Ring Road, Bangalore</p>
			</div>
			<div className="google-maps">
				<Map
					google={props.google}
					zoom={14}
					style={mapStyle}
					initialCenter={{
						lat: -1.2884,
						lng: 36.8233,
					}}
				/>
			</div>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyDpLeB9D2Ku6i_k2KId6bG8-yT9Zelp79o",
})(LocationHighlight);
