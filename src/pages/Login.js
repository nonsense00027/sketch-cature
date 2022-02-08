import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../shared/configs/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Success");
        navigate("/viewitems");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="flex items-center justify-center pt-20">
      <form className="w-80" onSubmit={login}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="border p-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="border p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-full bg-green-400 text-white py-1 mt-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
