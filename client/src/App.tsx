import ReactDOM from "react-dom";
import Charts from "./charts";
import React from "react";
import {
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

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
    dataType: String;
  }
> {
  constructor(props: String) {
    super(props);
    this.state = { dataType: "infected" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({ dataType: event.target.value });
  }
  render() {
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>DataType</InputLabel>
          <Select name="datatype" id="datatype" onChange={this.handleChange}>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Charts filterData={this.state.dataType} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
