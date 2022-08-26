import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AccountAPI from './api/accountAPI';
import './App.css';
import Index from './component';
import Header from './component/header';
import Login from './component/login';
import Signup from './component/signup';
// import Nav from 'react-bootstrap/Nav';
import Nav from './component/nav'

const accountAPI = new AccountAPI("http://192.168.4.59:8080")
function App() {
  const [logon, setLogon] = useState(false);
  return (
    <div className="container">
      <Nav logon={logon} setLogon={setLogon} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login accountAPI={accountAPI} setLogon={setLogon} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>

  );
}

export default App;

// 모듈 설치
// npm install react-bootstrap bootstrap