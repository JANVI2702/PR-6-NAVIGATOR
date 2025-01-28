import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Checking if user is authenticated based on the presence of a user in localStorage
  const isAuthenticated = !!user;

  // Register new user
  const register = async (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = savedUsers.find((u) => u.email === email);
    if (userExists) {
      throw new Error("User already exists");
    }

    const newUser = {
      id: Date.now(),
      email,
      password,
    };

    const updatedUsers = [...savedUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    // Do NOT log in the user automatically after registration
  };

  // Login existing user
  const login = async (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = savedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error("Invalid credentials");
    }

    const userWithoutPassword = {
      id: foundUser.id,
      email: foundUser.email,
    };

    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
  };

  // Logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
