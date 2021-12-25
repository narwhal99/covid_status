import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { Reports } from "./hooks/report";

export default function App() {
  const data = Reports();
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <Area dataKey="infected" />
        <XAxis dataKey="lastUpdatedAtApify" />
        <YAxis dataKey="infected" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
