import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAcount';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/exit" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
