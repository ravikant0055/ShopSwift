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
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
   <Router>
    <div className="App">
      
      <Navbar /> 
      {/* <Header />
      <Collection />
  <Categories/>*/}
      {/* <Trending />  */}
      {/* <Footer />  */}
      <ProductDetail />

    </div>
   </Router> 

  );
}
export default App;
