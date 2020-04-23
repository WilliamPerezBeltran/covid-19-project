import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Cards, Chart, CountryPicker } from "./components";

function App() {
  return (
    <div>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
