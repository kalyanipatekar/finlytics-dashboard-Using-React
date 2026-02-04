import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 50 },
  { name: "Mar", users: 40 },
  { name: "Apr", users: 80 },
  { name: "May", users: 65 },
];

const ChartSection = () => {
  return (
    <div style={{ height: 250, marginTop: 30 }} className="stat-card">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#60a5fa" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
