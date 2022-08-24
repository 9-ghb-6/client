import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, } from 'react-router-dom';
import './App.css';
import Header from './component/header';
import Index from './component/index';
import Login from './component/login';

function App() {

  useEffect(() => {
    setInterval(() => {
    }, 3000)
  }, [])

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

// 소문자 : html 소문자 alert
// 대문자 : 사용자 컴포너늩