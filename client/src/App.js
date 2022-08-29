import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AccountAPI from './api/accountAPI';
import './App.css';
import Index from './component';
import Header from './component/header';
import Login from './component/login';
import Signup from './component/signup';
import Nav from './component/nav'
import Write from './component/write';
import History from './component/history';

const accountAPI = new AccountAPI("http://192.168.4.59:8080")
function App() {
  const [logon, setLogon] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogon(localStorage.getItem("email"));
      
      
      accountAPI.valid(localStorage.getItem("token"))
        .then(received => {
          if (received.result) {
            setLogon(received.email);
        }
      })
    }
  },[])


  return (
    <div className="container">
      <Nav logon={logon} setLogon={setLogon} />
      <Routes>
        <Route path="/" element={<nav />} />
        <Route path="/login" element={<Login accountAPI={accountAPI} setLogon={setLogon} />} />
        <Route path="/history" element={<History />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>

  );  
}
export default App;

// 모듈 설치
// npm install react-bootstrap bootstrap