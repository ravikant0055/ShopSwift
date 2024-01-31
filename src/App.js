import './App.css';
import { Categories } from './components/common/category/Categories';
import Home from './pages/Home';
import Men from './pages/Men';
import Female from './pages/Women';
import Kids from './pages/Kids';
import Cart from './pages/Cart';
import Demo from './pages/Demo';
import Navbar from './components/common/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Login from './pages/Login';
import { Collection } from './components/common/content/Collection';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
=======
import ProductItems from './pages/ProductItems';
>>>>>>> Ravi
function App() {
  return (
   <Router>
    <div className="App">
<<<<<<< HEAD
      
      <Navbar /> 
      <Header />
      <Collection />
      <Categories/>
      <Footer />

=======
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
      </Routes>
>>>>>>> Ravi
    </div>
   </Router> 

  );
}

export default App;
