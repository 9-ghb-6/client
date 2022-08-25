
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Index from './component';
import Header from './component/header';
import Login from './component/login';
import Signup from './component/signup';

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

// 모듈 설치
// npm install react-bootstrap bootstrap