const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    email: "admin@finlytics.com",
    password: "1234",
    role: "admin",
  },
  {
    id: 2,
    email: "user@finlytics.com",
    password: "1234",
    role: "user",
  },
  {
    id: 3,
    email: "kalyani",
    password: "1234",
    role: "admin",   // or "user"
  },
];


// LOGIN API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    token: "demo-token",
    role: user.role,
    email: user.email,
  });
});

// USERS API
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Avinash", role: "UI Designer" },
    { id: 2, name: "Kalyani", role: "Frontend Dev" },
  ]);
});

app.listen(5000, () =>
  console.log("✅ Backend running on http://localhost:5000")
);
