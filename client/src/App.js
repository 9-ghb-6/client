
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Index from './component';
import Header from './component/header';
import Login from './component/login';

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
