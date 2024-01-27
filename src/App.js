import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';

import Trending from './components/common/trending/Trending';
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
