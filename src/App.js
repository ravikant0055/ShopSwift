import './App.css';
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
import ProductDetails from './pages/ProductDetails';
<<<<<<< HEAD
=======
import Accessories from './pages/Accessories';
import Address from './pages/Address';
function App() {
  return (
   <Router>
    <div className="App">
<<<<<<<<< Temporary merge branch 1
      
      <Navbar /> 
      {/* <Header />
      <Collection />
  <Categories/>*/}
      {/* <Trending />  */}
      {/* <Footer />  */}
      <ProductDetail />

=========
    <Navbar/>
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Female/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/productitems' element={<ProductItems/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}/>
      </Routes>
>>>>>>>>> Temporary merge branch 2
    </div>
   </Router> 

  );
}
export default App;
