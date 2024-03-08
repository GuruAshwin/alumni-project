// useAuth.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Check token validity with backend
      axios.post('https://alumni-server-1.onrender.com/validate-token', { token })
        .then(response => {
          if (response.data.valid) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            localStorage.removeItem('token'); // Remove invalid token from localStorage
          }
        })
        .catch(error => {
          console.error('Error validating token:', error);
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated;
}