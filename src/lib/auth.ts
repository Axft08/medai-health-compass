
// Simple auth utilities for demo purposes
// In a real application, this would use proper authentication services

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("medaiUser") !== null;
};

export const getUser = () => {
  const user = localStorage.getItem("medaiUser");
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem("medaiUser");
};
