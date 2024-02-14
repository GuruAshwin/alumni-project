// AuthContext.js
"use client";
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isUserLoggedIn');
    if (loggedInStatus === 'true') {
      setIsUserLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
