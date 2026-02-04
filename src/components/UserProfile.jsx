import { useParams, useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <h2>User not found</h2>;

  const chartData = [
    { month: "Jan", value: user.price - 200 },
    { month: "Feb", value: user.price - 50 },
    { month: "Mar", value: user.price + 100 },
    { month: "Apr", value: user.price - 80 },
    { month: "May", value: user.price + 150 },
  ];

  return (
    <div className="profile">

      <button onClick={() => navigate("/")}>← Back</button>

      <div className="cover"></div>

      <div className="profile-card">
        <img src={user.img} className="avatar" />
        <h2>{user.title}</h2>
        <p>{user.role}</p>
        <h3>${user.price}</h3>

        <div className="stats">
          <div><b>12</b><span>Projects</span></div>
          <div><b>8</b><span>Clients</span></div>
          <div><b>4.9★</b><span>Rating</span></div>
        </div>
      </div>

      <div className="chart-card">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#6366f1" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserProfile;
