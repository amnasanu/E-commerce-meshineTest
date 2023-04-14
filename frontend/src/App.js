import './App.css';
import Register from './Screens/register/Register'
import Home from './Screens/home/homeScreen'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Screens/login/Login'

function App() {
  return (
    <Router>
      <Routes>

        <Route index path='/home' element={<Home />} />
        <Route index path='/register' element={<Register />} />
        <Route index path='/' element={<Login />} />


      </Routes>
    </Router>
  );
}

export default App;
