import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {

  const isAuthenticated = useSelector((state) => !!state.user.name); 

  return isAuthenticated ? element : <Navigate to="/" />;
  
};

export default ProtectedRoute;
