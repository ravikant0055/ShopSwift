import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
   <Router>
    <div className="App">
      
      <Routes />

    </div>
   </Router> 

  );
}

export default App;
