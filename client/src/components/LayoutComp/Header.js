import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast'
import logo from './../../images/logo1.png'
import { useCart } from '../../context/cart';
import { Badge } from 'antd';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const navigate = useNavigate();

  const logoutHandler = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    })
    localStorage.removeItem('auth')
    toast.success('Log out successfully')
    navigate('/login')
  }

  const logoutConfirmation = (e) => {
    e.preventDefault();
    const confirm = window.confirm('Are you sure to log out?');
    if(confirm) {
      logoutHandler();
    }
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar navbar-expand-lg bg-secondary ${isScrolled ? 'fixed-top' : ''}`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" style={{color: 'whitesmoke'}}>
              <img src={logo} alt='logo' height={65}/>
              FPO KHANAWALI
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Our Products
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Log In
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user.name}
                    </NavLink>
                    <ul className="dropdown-menu bg-secondary">
                      {auth?.user?.role === 1 ? (
                        <>
                          <li>
                            <NavLink
                              className="dropdown-item"
                              to="/dashboard/admin/profile"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <NavLink
                              className="dropdown-item"
                              to="/dashboard/user/profile"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                        </>
                      )}
                      <li>
                        <NavLink className="dropdown-item" to={auth?.user?.role === 1 ? "/dashboard/admin/profile" : "/dashboard/user/profile"}>
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={logoutConfirmation}
                          className="dropdown-item"
                          to="/login"
                        >
                          Log Out
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                
                <NavLink to="/cart" className="nav-link">
                  CART
                  <Badge count={cart?.length} showZero >
                    🛒
                  </Badge>
                </NavLink>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;