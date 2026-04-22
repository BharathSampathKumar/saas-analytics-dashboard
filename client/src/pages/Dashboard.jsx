import { useEffect, useState } from "react";
import api from "../api/axios";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectId = localStorage.getItem("projectId");
      const res = await api.get(`/analytics/events-over-time?projectId=${projectId}&range=7d`);
      setData(res.data.map(d => ({ date: d._id, count: d.count })));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Analytics</h2>

      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" />
      </LineChart>
    </div>
  );
}