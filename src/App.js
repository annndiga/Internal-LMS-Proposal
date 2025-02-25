import React from "react";
import { BrowserRouter } from "react-router-dom"; // Keep BrowserRouter here
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter> {/* Only one BrowserRouter in the app */}
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;