import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UploadForm from './components/UploadForm';
import DiseaseChatbot from './components/DiseaseChatbot';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/predict" element={<DiseaseChatbot />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;