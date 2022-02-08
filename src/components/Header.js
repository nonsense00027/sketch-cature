import { signOut } from "@firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { auth } from "../shared/configs/firebase";

function Header() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Logo here</h1>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/">Landing</Link>
          {user ? (
            <Link to="/viewitems">View Items</Link>
          ) : (
            <Link to="/sale">For Sale</Link>
          )}
          <Link to="/contact">Contact</Link>
          <Link to="/technology">Technology</Link>
          {user ? (
            <a
              className="cursor-pointer"
              onClick={() => {
                signOut(auth);
                navigate("/");
              }}
            >
              Logout
            </a>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
