import "./App.css";
import Sidebar from "./components/Sidebar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import UserProfile from "./components/UserProfile";

import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app-layout">
                <Sidebar />

                <div className="page-area">
                  <Routes>

                    <Route path="/" element={<><Section1 /><Section2 /></>} />

                    <Route path="/user/:id" element={<UserProfile />} />

                    <Route
                      path="/analytics"
                      element={
                        <ProtectedRoute roles={["admin"]}>
                          <Analytics />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/settings"
                      element={
                        <ProtectedRoute roles={["admin"]}>
                          <Settings />
                        </ProtectedRoute>
                      }
                    />

                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
