import ReactDOM from "react-dom";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from './Login';
import Profile from "./profile";
import ShowProfile from "./showprofile";
import Home from "./home";
import Developers from "./Developers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myprofile/:id" element={<Profile />}></Route>
        <Route path="/profile/:id" element={<ShowProfile />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/developers/:id" element={<Developers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
