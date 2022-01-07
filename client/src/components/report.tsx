import axios from "axios";
import { useEffect, useState } from "react";

interface Report {
  infected: Number;
  activeInfected: Number;
  deceased: Number;
  recovered: Number;
  quarantined: Number;
  tested: Number;
  lastUpdatedAtApify: Date;
}
export const Reports = () => {
  const url =
    "http://localhost:5000/reports/date/2020-03-15T11:46:00.000+00:00/2022-04-15T11:46:00.000+00:00";
  const [data, setData] = useState<Report[]>([]);

  const getData = async () => {
    const result = await axios.get(url);
    setData(result.data);
  };

  useEffect(() => {
    getData();
  });

  return data;
};
