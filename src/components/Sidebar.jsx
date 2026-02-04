import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const role = sessionStorage.getItem("role");

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const items = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", path: "/", roles:["admin","user"] },
    { icon: <Users size={18} />, label: "Customers", path: "/", roles:["admin","user"] },
    { icon: <BarChart3 size={18} />, label: "Analytics", path: "/analytics", roles:["admin"] },
    { icon: <Settings size={18} />, label: "Settings", path: "/settings", roles:["admin"] },
  ];

  return (
    <div className="sidebar">
      <h2 className="brand">Finlytics</h2>

      {items
        .filter((item) => item.roles.includes(role))
        .map((item, i) => (
          <NavLink key={i} to={item.path} className="side-item">
            {item.icon}
            {item.label}
          </NavLink>
        ))}

      <div className="side-item logout" onClick={logout}>
        <LogOut size={18} /> Logout
      </div>
    </div>
  );
};

export default Sidebar;
