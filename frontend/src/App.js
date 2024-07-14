import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AddIdea from "./components/GlamHome/GlamBoard/AddIdea.js";
import Draft from './components/GlamHome/GlamBoard/Draft.js';
import Idea from "./components/GlamHome/GlamBoard/Idea.js";
import GlamSales from "./components/GlamHome/GlamBoard/overview.js";
import PostPage from "./components/GlamHome/GlamBoard/postPage.js";
import Designer from "./components/GlamHome/GlamBoard/Profile.js";
import UpdatePassword from "./components/GlamHome/GlamBoard/UpdatePassword.js";
import UpdateDesigner from "./components/GlamHome/GlamBoard/UpdateProfile.js";
import UploadAvatar from "./components/GlamHome/GlamBoard/UploadAvatar.js";
import GlamHome from "./components/GlamHome/GlamHome.js";
import Dashboard from "./components/Login/Dashboard/overview.js";
import Login from "./components/Login/Login";
import MessagePage from './components/Message/MessagePage.jsx';
import Navbar from './components/Navbar/Navbar.js';

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
        <Route path="/PostPage" element={<PostPage/>}/>
        <Route path='/Message' element={<MessagePage/>}/>
        <Route path='/Draft' element={<Draft/>}/>
      </Routes>
    </Router>
  );
}

export default App;
