import './App.css';
import { Categories } from './components/common/category/Categories';
import Home from './pages/Home';
import Men from './pages/Men';
import Female from './pages/Women';
import Kids from './pages/Kids';
import Cart from './pages/Cart';
import Navbar from './components/common/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { Collection } from './components/common/content/Collection';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Trending from './components/common/trending/Trending';
function App() {
  return (
   <Router>
    <div className="App">
      
      <Navbar /> 
      <Header />
      <Collection />
      <Categories/>
      <Trending />
      <Footer />

    </div>
   </Router> 

  );
}

export default App;
