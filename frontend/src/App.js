import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import GlamHome from "./components/GlamHome/GlamHome.js";
import Login from "./components/Login/Login";
import Dashboard from "./components/Login/Dashboard/overview.js";
import GlamSales from "./components/GlamHome/GlamBoard/overview.js";
import Designer from "./components/GlamHome/GlamBoard/Profile.js";
import UpdateDesigner from "./components/GlamHome/GlamBoard/UpdateProfile.js";
import UploadAvatar from "./components/GlamHome/GlamBoard/UploadAvatar.js";
import UpdatePassword from "./components/GlamHome/GlamBoard/UpdatePassword.js";
import Idea from "./components/GlamHome/GlamBoard/Idea.js";
import AddIdea from "./components/GlamHome/GlamBoard/AddIdea.js";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/GlamGrid" element={<GlamHome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Glamsales" element={<GlamSales />} />
        <Route path="/Designer" element={<Designer />} />
        <Route path="/UpdateDesigner" element={<UpdateDesigner />} />
        <Route path="/UploadAvatar" element={<UploadAvatar />} />
        <Route path="/UpdatePassword" element={<UpdatePassword />} />
        <Route path="/Idea" element={<Idea />} />
        <Route path="/AddIdea" element={<AddIdea />} />
      </Routes>
    </Router>
  );
}

export default App;
