import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/CartPage";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/private";
import ForgotPasssword from "./pages/Auth/ForgetPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import User from "./pages/Admin/User";
import Profile from "./pages/user/Profile";
import Order from "./pages/user/Order";
import Products from "./pages/Admin/Product";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProducts";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />

        <Route path="/dashboard/user" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Order />} />
        </Route>

        <Route path="/dashboard/admin" element={<AdminRoute />}>
          <Route index element={<AdminDashboard />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:slug" element={<UpdateProduct />} />
          <Route path="orders" element={ <AdminOrders/>} />
          <Route path="users" element={<User />} />
        </Route>

        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
