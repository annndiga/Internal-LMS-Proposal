import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import TrainerDashboard from "../pages/Dashboard/TrainerDashboard";
import StudentDashboard from "../pages/Dashboard/StudentDashboard";
import Unauthorized from "../pages/Unauthorized"; 
import RoleBasedRoute from "../components/RoleBasedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            <RoleBasedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/trainer"
          element={
            <RoleBasedRoute allowedRoles={["trainer"]}>
              <TrainerDashboard />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/student"
          element={
            <RoleBasedRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </RoleBasedRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;