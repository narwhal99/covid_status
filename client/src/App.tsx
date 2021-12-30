import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import moment from "moment";

import { Reports } from "./hooks/report";

export default function App() {
  const data = Reports();
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <Area dataKey="infected" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="lastUpdatedAtApify"
          tickFormatter={(date) => moment(date).format("YYYY.MM.DD")}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickCount={7}
          dataKey="infected"
        />
        <Tooltip />
        <CartesianGrid opacity={0.5} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
