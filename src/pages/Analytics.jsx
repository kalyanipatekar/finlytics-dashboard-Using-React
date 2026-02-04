import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

const Analytics = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const totalRevenue = users.reduce((a, b) => a + b.price, 0);

  const roleData = Object.values(
    users.reduce((acc, u) => {
      acc[u.role] = acc[u.role]
        ? { ...acc[u.role], value: acc[u.role].value + 1 }
        : { name: u.role, value: 1 };
      return acc;
    }, {})
  );

  const revenueData = [
    { month: "Jan", value: totalRevenue - 1000 },
    { month: "Feb", value: totalRevenue - 600 },
    { month: "Mar", value: totalRevenue - 200 },
    { month: "Apr", value: totalRevenue },
    { month: "May", value: totalRevenue + 400 },
  ];

  return (
    <div className="page-card">

      <h2>📊 Analytics Dashboard</h2>

      <div className="analytics-grid">

        {/* Revenue Line */}
        <div className="chart-box">
          <h4>Revenue Growth</h4>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#6366f1" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Role Pie */}
        <div className="chart-box">
          <h4>Role Distribution</h4>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={roleData} dataKey="value" outerRadius={80}>
                {roleData.map((_, i) => (
                  <Cell key={i} fill={colors[i % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
