import React, { Component } from "react";
import "./App.css";

import { Cards, Chart, CountryPicker } from "./components";

import { fetchData } from "./api";

class App extends Component {
	state = {
		data: {},
	};

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}

	render() {
		return (
			<div className="container">
				<Cards data={this.state.data} />
				<Chart />
				<CountryPicker />
			</div>
		);
	}
}

export default App;
