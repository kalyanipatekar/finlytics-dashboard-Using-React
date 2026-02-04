import { useState } from "react";

const Settings = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("light");
  };

  const resetData = () => {
    localStorage.removeItem("users");
    window.location.reload();
  };

  return (
    <div className="page-card">

      <h2>⚙ Settings</h2>

      <div className="settings-box">
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>

        <button onClick={resetData} style={{ background: "#ef4444" }}>
          Reset Users
        </button>
      </div>

    </div>
  );
};

export default Settings;
