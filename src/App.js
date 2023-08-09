import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ShoppingCard from "./pages/ShoppingCard";
import Carddetails from "./pages/Carddetails";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <div className="content-home">
    //     <Home />
    //     {/* <ShoppingCard /> */}
    //   </div>
    // </div>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact/:id" element={<Carddetails />} />
          </Routes>
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shoppingCart">
              <ShoppingCard />
            </Route> */}
          {/* <Route path="/blogs/:id">
            <BlogDetails />
          </Route> */}
          {/* <Route path="*">
            <NotFound />
          </Route> */}
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
