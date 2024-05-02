import Home from "./Components/Home/Home";
import LoginHome from "./Components/Login/LoginHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<LoginHome></LoginHome>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
