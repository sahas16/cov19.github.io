import React from "react";
import Cards from "./components/cards/cards";
import Chart from "./components/chart/chart";
import CountryPicker from "./components/country.picker/country.picker";
import { fetchData } from "./api/index";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
    };
  }
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <h1>COVID - 19</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
