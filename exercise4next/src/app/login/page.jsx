import LoginForm from "@/components/LoginForm";
import Link from "next/link";

// Save as page.jsx in app/about
export default function Login() {
  return (
      <div className="Login">
        <h1>Login</h1>
          <LoginForm />
      </div>
  );
}
// Check http://localhost:3000/about to see it in action
