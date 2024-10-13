import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserForm from '../components/UserForm';
import AdminDashboard from '../components/AdminDashboard';
import AdminLogin from '../components/AdminLogin';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>

  );
};

export default App;
