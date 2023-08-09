import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-home">
        <Home />
      </div>
    </div>
  );
}

export default App;
