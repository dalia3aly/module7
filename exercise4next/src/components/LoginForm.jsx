'use client';

import { useState } from "react";
import { useUserContext } from "@/context/UserContext";

function LoginForm() {

  // Initialize states with input fields empty
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  
  const { currentUser, handleUpdateUser } = useUserContext();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 6) {
      setSubmitResult("Password must be at least 6 characters long");

    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");

    } else if (!emailRegex.test(userEmail)) {
      setSubmitResult("Invalid email format");

    } else {
      setSubmitResult("Welcome Back!");
      handleUpdateUser({ email: userEmail, name: userName });
    }
  };

  if (currentUser.email) {
    return (
      <>
        <p>Welcome {currentUser.name}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );
  }

  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Name:
            <input 
              type="text" 
              value={userName} 
              placeholder="e.g. Hayley Raso"  
              onChange={(e) => setUserName(e.target.value)} 
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Email Address:
            <input 
              type="text" 
              value={userEmail} 
              placeholder="e.g. hayley.raso@matildas.com" 
              onChange={(e) => setUserEmail(e.target.value)} 
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input 
              type="password" 
              value={userPassword} 
              onChange={(e) => setUserPassword(e.target.value)} 
            />
          </label>
        </div>
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;
