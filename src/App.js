import "./App.css";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Personal from "./Components/Personal";
import Address from "./Components/Address";
import Myproducts from "./Components/Myproducts";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route exact path="" element={<Main></Main>}></Route>
        <Route
          exact
          path="/product/:id"
          element={<ProductPage></ProductPage>}
        ></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/register" element={<Signup></Signup>}></Route>
        <Route exact path="/cart" element={<Cart></Cart>}></Route>
        <Route exact path="/profile" element={<Profile></Profile>}>
          <Route exact path="personal" element={<Personal></Personal>}></Route>
          <Route exact path="address" element={<Address></Address>}></Route>
          <Route
            exact
            path="myproducts"
            element={<Myproducts></Myproducts>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
