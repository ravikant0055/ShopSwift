import './App.css';
import Login from './pages/Login';
import { Collection } from './components/common/content/Collection';
import Header from './components/common/header/Header';
import Navbar from './components/common/navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Header />
      <Collection />

    </div>
  );
}

export default App;
