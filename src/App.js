import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carddetails from "./pages/Carddetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact/:id" element={<Carddetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
