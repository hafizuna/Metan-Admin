import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Requests from "./Requests";
import Accounts from "./Accounts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/requests" element={<Requests />}></Route>
          <Route path="/home/accounts" element={<Accounts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
