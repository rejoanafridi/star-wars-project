import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import People from "./People";
import Home from "./Home";
import Planets from "./Planets";
import "./style.css";

const Main = () => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchPeople() {
			let res = await fetch("https://swapi.dev/api/people/?format=json");
			let data = await res.json();
			setPeople(data.results);
			setLoading(false);
		}
		async function fetchPlanets() {
			let res = await fetch("https://swapi.dev/api/planets/?format=json");
			let data = await res.json();
			setPlanets(data.results);
			setLoading(false);
		}
		fetchPlanets();
		fetchPeople();
	}, []);

	// console.log("data", people);

	return (
		<Router>
			<Navbar />
			
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/people">
					<People loading={loading} data={people} />
				</Route>
				<Route exact path="/planets">
					<Planets loading={loading} data={planets} />
				</Route>
			</Switch>
		</Router>
	);
};

export default Main;
