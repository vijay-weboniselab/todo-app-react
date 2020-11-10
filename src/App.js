import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
