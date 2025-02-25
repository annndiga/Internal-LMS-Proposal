import React from "react";
import { Routes, Route } from "react-router-dom"; // Do not use BrowserRouter here
import HomePage from "../pages/HomePage";
import Courses from "../pages/Courses";
import CourseView from "../pages/CourseView";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import TrainerDashboard from "../pages/Dashboard/TrainerDashboard";
import StudentDashboard from "../pages/Dashboard/StudentDashboard";
import RoleBasedRoute from "../components/RoleBasedRoute";

const AppRoutes = () => {
  return (
    <Routes> {/* Only use Routes and Route here */}
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseView />} />
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
    </Routes>
  );
};

export default AppRoutes;