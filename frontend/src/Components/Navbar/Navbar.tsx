import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import "./Navbar.css";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  const newLocal = "relative container mx-auto p-6";

  return (
    <nav className={newLocal}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? ( // Corrected here
          <div className="hidden lg:flex items-center space-x-6 text-black"> {/* Corrected "text-back" to "text-black" */}
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              href="#"
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-black"> {/* Corrected "text-back" to "text-black" */}
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;