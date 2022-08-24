import { Alert } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="alert" alert-success>
      <Alert varaint="success">
        부트스트랩을 적용한 리액트 애
      </Alert>
      <Alert varaint="danger">
        부트스트랩을 적용한 리액트 애
      </Alert>
      <h1>공사중</h1>
    </div>
  );
}

export default App;
