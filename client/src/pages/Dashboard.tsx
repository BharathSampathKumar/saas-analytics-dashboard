import { useEffect, useState } from "react";
import { getEventsOverTime } from "../api/analytics";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import type { EventsOverTimeFormatted } from "../types/analytics";

export default function Dashboard() {
  const [data, setData] = useState<EventsOverTimeFormatted[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getEventsOverTime("PROJECT_ID_HERE");
      const formatted = res.map((d) => ({
        date: d._id,
        count: d.count,
      }));
      setData(formatted);
    };

    fetch();
  }, []);

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" />
      </LineChart>
    </div>
  );
}