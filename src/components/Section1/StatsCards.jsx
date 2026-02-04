const StatsCards = () => {
  const stats = [
    { number: 24, label: "Members" },
    { number: 18, label: "Active" },
    { number: 6, label: "Pending" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {stats.map((s, i) => (
        <div key={i} className="stat-card">
          <h3>{s.number}</h3>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
