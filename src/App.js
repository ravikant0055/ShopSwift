import './App.css';
import ProductDetail from './components/common/productDetails/ProductDetail';
import Home from './pages/Home';
import Men from './pages/Men';
import Female from './pages/Women';
import Kids from './pages/Kids';
import Cart from './pages/Cart';
import Demo from './pages/Demo';
import Navbar from './components/common/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProductItems from './pages/ProductItems';
<<<<<<< HEAD
import ProductDetail from './components/common/ProductDetails/ProductDetail';
=======
import ProductDetails from './pages/ProductDetails';
>>>>>>> 6cf7c67a28cf51bd8c08b0a0740caab7cdcf880e
function App() {
  return (
   <Router>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Female/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/productitems' element={<ProductItems/>}/>
<<<<<<< HEAD
        <Route path='/productDetail' element ={<ProductDetail />} />
=======
        <Route path='/productdetails' element={<ProductDetails/>}/>
>>>>>>> 6cf7c67a28cf51bd8c08b0a0740caab7cdcf880e
      </Routes>
    </div>
   </Router> 

  );
}
export default App;
