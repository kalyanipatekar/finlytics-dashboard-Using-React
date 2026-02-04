import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", form);

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("role", res.data.role);

      navigate("/");
    } catch {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Finlytics Login</h2>

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button>Login</button>

        <p>
          kalyani / 1234  
          <br />
          user@finlytics.com / 1234
        </p>
      </form>
    </div>
  );
};

export default Login;
