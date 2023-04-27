import { Routes, Route } from 'react-router-dom'

import DataPage from './pages/DataPage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import NoMatchPage from './pages/NoMatchPage'
import HomePage from './pages/HomePage'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
