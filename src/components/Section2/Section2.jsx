import { useState, useMemo, useEffect } from "react";
import RightCard from "../RightCard";
import { useNavigate } from "react-router-dom";

const pageSize = 6;

const defaultUsers = [
  { id: 1, title: "Avinash Mishra", role: "UI Designer", price: 1200, img: "https://i.pravatar.cc/150?img=1" },
  { id: 2, title: "Rahul Mehta", role: "Frontend Dev", price: 1500, img: "https://i.pravatar.cc/150?img=2" },
  { id: 3, title: "Jordan Jonas", role: "Backend Dev", price: 1700, img: "https://i.pravatar.cc/150?img=3" },
  { id: 4, title: "Arjun Rao", role: "Tester", price: 1000, img: "https://i.pravatar.cc/150?img=4" },
  { id: 5, title: "Priya Shah", role: "Manager", price: 2000, img: "https://i.pravatar.cc/150?img=5" },
];

export default function Section2() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || defaultUsers
  );

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [page, setPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    title: "",
    role: "",
    price: "",
    img: "",
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // ✅ CSV FIXED (title + price)
  const exportCSV = () => {
    const csv =
      "Name,Role,Salary\n" +
      users.map((u) => `${u.title},${u.role},${u.price}`).join("\n");

    const blob = new Blob([csv]);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "users.csv";
    a.click();
  };

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchName = u.title.toLowerCase().includes(search.toLowerCase());
      const matchRole = roleFilter === "All" || u.role === roleFilter;
      return matchName && matchRole;
    });
  }, [users, search, roleFilter]);

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleAddUser = () => {
    setUsers([
      ...users,
      {
        ...newUser,
        id: Date.now(),
        price: Number(newUser.price),
        img: newUser.img || "https://i.pravatar.cc/150",
      },
    ]);

    setShowModal(false);
    setNewUser({ title: "", role: "", price: "", img: "" });
  };

  const handleDelete = (id) =>
    setUsers(users.filter((u) => u.id !== id));

  const handleEdit = (id) => {
    const name = prompt("Enter new name");
    if (!name) return;

    setUsers(users.map((u) => (u.id === id ? { ...u, title: name } : u)));
  };

  return (
    <div className="section2">

      <div className="top-bar">
        <input
          placeholder="🔍 Search member..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option>All</option>
          <option>UI Designer</option>
          <option>Frontend Dev</option>
          <option>Backend Dev</option>
          <option>Tester</option>
          <option>Manager</option>
        </select>

        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add User
        </button>

        <button className="export-btn" onClick={exportCSV}>
          Export CSV
        </button>
      </div>

      <div className="grid">
        {paginatedUsers.map((u) => (
          <RightCard
            key={u.id}
            {...u}
            price={`$${u.price}`}
            onView={() => navigate(`/user/${u.id}`)}
            onEdit={() => handleEdit(u.id)}
            onDelete={() => handleDelete(u.id)}
          />
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <h3>Add User</h3>

            <input placeholder="Name" onChange={(e) => setNewUser({ ...newUser, title: e.target.value })}/>
            <input placeholder="Role" onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}/>
            <input placeholder="Salary" onChange={(e) => setNewUser({ ...newUser, price: e.target.value })}/>
            <input placeholder="Image URL" onChange={(e) => setNewUser({ ...newUser, img: e.target.value })}/>

            <button onClick={handleAddUser}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
