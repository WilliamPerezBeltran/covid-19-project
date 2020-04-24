import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(url);

		const modifiedData = {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		console.log("error");
		console.log(error);
	}
};

// method 1

// Nomally it is used to be in that way
// export const fetchData = async () => {
// 	try {
// 		const response = await axios.get(url);

// 		return response;
// 	} catch (error) {
// 		console.log(error)
// 	}
// };
// ----------------------

// method 2
// destructuring data

// we captured the date we need

// export const fetchData = async () => {
// 	const { data } = await axios.get(url);

// 	const modifiedData = {
// 		confirmed: data.confirmed,
// 		recovered: data.recovered,
// 		deaths: data.deaths,
// 		lastUpdate: data.lastUpdate,
// 	};

// 	return modifiedData;
// };

// ----------------------

// method 3
// destructuring data more efficiently

// export const fetchData = async () => {
// 	const {
// 		data: { confirmed, recovered, deaths, lastUpdate },
// 	} = await axios.get(url);

// 	const modifiedData = {
// 		confirmed: confirmed,
// 		recovered: recovered,
// 		deaths: deaths,
// 		lastUpdate: lastUpdate,
// 	};

// 	return modifiedData;
// };

// ----------------------
// method 4

// even more efficiently

//  It's the value and the key has the same name, we can ommit the value
//  and automaticly taken, and it is more easy to read and write

// export const fetchData = async () => {
// 		const {
// 			data: { confirmed, recovered, deaths, lastUpdate },
// 		} = await axios.get(url);

// 		const modifiedData = {
// 			confirmed,
// 			recovered,
// 			deaths,
// 			lastUpdate,
// 		};
// 		return { confirmed, recovered, deaths, lastUpdate };
// };
