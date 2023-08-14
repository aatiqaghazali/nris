import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home } from "./pages/index"
import Footer from "./components/commons/Footer/index"
function App() {
  return (
    <Router>
    <Routes>
      <Route path={"/nris"} element={<Home />} />
      
    </Routes>
    <br></br>
    <hr></hr>
    <Footer></Footer>
    </Router>
  );
}

export default App;
