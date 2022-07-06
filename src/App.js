import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="" element={<Main></Main>}></Route>
        <Route
          path="/product/:id"
          element={<ProductPage></ProductPage>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Signup></Signup>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
