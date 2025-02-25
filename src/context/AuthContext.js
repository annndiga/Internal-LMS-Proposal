import React, { createContext, useState } from "react";

export const AuthContext = createContext(); // Named export

export const AuthProvider = ({ children }) => { // Named export
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};