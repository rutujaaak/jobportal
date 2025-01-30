import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      saveUserData();
    }
  }, [isAuthenticated]);

  const saveUserData = async () => {
    if (user) {
      try {
        const response = await axios.post("http://localhost:3001/auth/save-user", {
          name: user.name,
          email: user.email,
          phone: user.phone || null,
        });
        console.log("User data saved:", response.data);
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <nav className="bg-blue-600 p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-white text-lg font-semibold">
        Job Portal
      </Link>
      <div className="flex items-center">
        {isAuthenticated ? (
          <div className="flex items-center">
            <img
              src={user?.picture}
              alt={user?.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-white mr-4">Hello, {user?.name}</span>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
