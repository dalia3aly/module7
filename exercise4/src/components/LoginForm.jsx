import { useState } from "react";
import { loginFormInput } from "../hooks/useLoginFormInput";

export default function LoginForm() {
  const [status, setStatus] = useState("");

  const [emailProps, emailReset, emailValid] = loginFormInput("hayley.raso@matildas.com", "email");
  const [passwordProps, passwordReset, passwordValid] = loginFormInput("", "password");

  const [confirmProps, confirmReset] = loginFormInput(false, "checkbox");            //CoPilot suggestion

  function handleLogin() {

    if ( emailValid() && passwordValid()) {
 
        emailReset();
        passwordReset();
        confirmReset();

        setStatus("Welcome Back!");
    } else setStatus("Please complete all fields");
  }

  return (
    <div className="LoginForm componentBox">
      <h2>Login</h2>
      <label>
        Email: 
        <input {...emailProps} />
      </label>
      <label>
        Password:
        <input {...passwordProps} />
      </label>    
      <label>
        Subscribe to our Newsletter?
        <input {...confirmProps} />
      </label>         
      <button onClick={handleLogin}>Login</button>
      <div>{status}</div>
    </div>
  );
}
