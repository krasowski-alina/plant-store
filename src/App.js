import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import './App.css';
import FAQ from "./FAQ";
import Home from "./Home";
import icon from "./icon.ico"

function App() {
  return (
 <Router>
  <nav>
    <div className="navIcon"><img src={icon} className="icon" alt="icon"/></div>
    <div className="links">
    <Link to="/" className="link">HOME</Link>
    <Link to="/about" className="link">ABOUT</Link>
    <Link to="/faq" className="link">FAQ</Link>
     </div>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/faq" element={<FAQ/>}/>
  </Routes>
 </Router>
  );
}

export default App;
