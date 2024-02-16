import {Routes,Route,Navigate} from 'react-router-dom'
import Homepage from './pages/hompage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './components/Routes/Private';
import { useAuth } from "./context/auth";
import ForgotPassword from './pages/Auth/ForgotPassword';
import PrivateAdmin from './components/Routes/PrivateAdmin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddProduct from './pages/Admin/AddProduct';
import AdminProfile from './pages/Admin/AdminProfile';
import Users from './pages/Admin/Users';
import AllProducts from './pages/AllProducts';
import AdminProduct from './pages/Admin/AdminProduct';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/User/Cart';
import Profile from './pages/User/Profile';
import EditUserProfile from './pages/User/EditUserProfile';
import ChangePassword from './pages/User/ChangePassword';
import Orders from './pages/User/Orders';
import AdminOrders from './pages/Admin/AdminOrders';


function App() {
  const [auth, setAuth] = useAuth()
  //eslint-disable-next-line
  setAuth

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        {auth.user ? (
          auth.user.role === 1 ? (
            <>
              <Route path="/register" element={<Navigate to="/dashboard/admin" />}/>
              <Route path="/login" element={<Navigate to="/dashboard/admin" />} />
              <Route path="/forgot-password" element={<Navigate to="/dashboard/admin" />} />
            </>
          ) : (
            <>
              <Route path="/register" element={<Navigate to="/dashboard/user" />} />
              <Route path="/login" element={<Navigate to="/dashboard/user" />} />
              <Route path="/forgot-password" element={<Navigate to="/dashboard/user" />} />
            </>
          )
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </>
        )}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/edit-profile" element={<EditUserProfile />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="/dashboard" element={<PrivateAdmin />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/edit-profile" element={<EditUserProfile />} />
          <Route path="admin/change-password" element={<ChangePassword />} />
          <Route path="admin/add-product" element={<AddProduct />} />
          <Route path="admin/products/:slug" element={<UpdateProduct />} />
          <Route path="admin/profile" element={<AdminProfile />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/products" element={<AdminProduct />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
