import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
     <div className="App">
        <BrowserRouter>
      
          <LandingPage />
       
      </BrowserRouter>
     </div>
    );
}

export default App;
