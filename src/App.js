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
      <span className='text-3xl'>Abhishek</span>
      <Navbar/>
    </div>
   </Router> 

  );
}

export default App;
