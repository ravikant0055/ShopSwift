import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';

import Trending from './components/common/trending/Trending';
import Navbar from './components/common/navbar/Navbar';
import Header from './components/common/header/Header';
import { Collection } from './components/common/content/Collection';
import { Categories } from './components/common/category/Categories';
import Footer from './components/common/footer/Footer';
function App() {
  return (
   <Router>
    <div className="App">
      
      <Navbar /> 
      <Header />
      <Collection />
      <Categories/>
      <Footer />

    </div>
   </Router> 

  );
}

export default App;
