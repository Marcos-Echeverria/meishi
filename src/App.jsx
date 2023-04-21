import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import Menu from "./components/pages/menu/menu";
import Navbar from "./components/pages/navbar/navbar";



function App() {
  return (
    <div className='App'>
      
      <Navbar/>

      <Router>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/menu" element={<Menu /> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App
