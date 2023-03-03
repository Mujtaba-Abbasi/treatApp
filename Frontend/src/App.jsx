import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="div">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
