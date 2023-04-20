import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, MenuPage } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
