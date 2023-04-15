import './App.css';
import Register from './Screens/register/Register'
import Home from './Screens/home/homeScreen'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Screens/login/Login'
import ProductDetail from './Screens/productScreen/ProductDetail'
import CartScreen from './Screens/cart/CartScreen';

function App() {
  return (
    <Router>
      <Routes>

        <Route index path='/' element={<Home />} />
        <Route index path='/register' element={<Register />} />
        <Route index path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart/:id' element={<CartScreen en />} />


      </Routes>
    </Router>
  );
}

export default App;
