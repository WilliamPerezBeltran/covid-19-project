import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import "./Cards.css";
import cx from 'classnames'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate }}) => {

	console.log(confirmed)

	if (!confirmed) {
		return '...loading'
	}
	return (
		<div className="container">
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className="card infected">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Infected</Typography>
						<Typography varient="h5">
							<CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of active cases of  COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className="card recovered">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Recovered</Typography>
						<Typography varient="h5">
							<CountUp start={0} end={recovered.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of recoveries from COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className="card deaths">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Deaths</Typography>
						<Typography varient="h5">
							<CountUp start={0} end={deaths.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of deaths caused by COVID-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
