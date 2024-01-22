import './App.css';
import { Categories } from './components/common/category/Categories';
import { Collection } from './components/common/content/Collection';
import Header from './components/common/header/Header';
import Navbar from './components/common/navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Header />
      <Collection />
      <Categories />

    </div>
  );
}

export default App;
