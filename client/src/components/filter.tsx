import {
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import moment from "moment";
import MomentAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useState } from "react";

const options = [
  "infected",
  "activeInfected",
  "deceased",
  "recovered",
  "quarantined",
  "tested",
];
export default function Filter({ dataType }: any) {
  const [data, setData] = useState("infected");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  // const [endDate, setEndDate] = useState<Date | null>((new Date());

  function handleChange(event: any) {
    setData(event.target.value);
    dataType(event.target.value);
  }
  return (
    <LocalizationProvider dateAdapter={MomentAdapter}>
      <DesktopDatePicker
        label="For desktop"
        value={startDate}
        // minDate={new Date("2017-01-01")}
        onChange={(newValue) => {
          setStartDate(newValue);
          console.log(moment(newValue).toDate());
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>DataType</InputLabel>
        <Select value={data} onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </LocalizationProvider>
  );
}
