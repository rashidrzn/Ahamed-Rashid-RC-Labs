import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import ShoppingCard from "./pages/ShoppingCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-home">
        <Home />
        <ShoppingCard />
      </div>
    </div>
  );
}

export default App;
