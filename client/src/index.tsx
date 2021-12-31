import ReactDOM from "react-dom";
import Charts from "./charts";
import React, { useState } from "react";

const options = [
  "infected",
  "activeInfected",
  "deceased",
  "recovered",
  "quarantined",
  "tested",
];

class App extends React.Component<
  {},
  {
    value: String;
  }
> {
  constructor(props: String) {
    super(props);
    this.state = { value: "infected" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any = "Infected") {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <select name="datatype" id="datatype" onChange={this.handleChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Charts filterData={this.state.value} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
