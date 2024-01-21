import './App.css';
import Home from './pages/Home';
import Men from './pages/Men';
import Female from './pages/Women';
import Kids from './pages/Kids';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Navbar from './components/common/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      </Routes>
    </div>
   </Router> 

  );
}

export default App;
