import { Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="dashboard-header animate-fadeIn">
      <h1>Customer Segmentation Dashboard</h1>
      <p>Monitor users, activity & growth analytics</p>

      <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
        <Bell />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
