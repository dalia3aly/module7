'use client';
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import AuthenticatedApp from "@/components/AuthenticatedApp";
import Stack from 'react-bootstrap/Stack';


// Save as page.jsx in app/about
export default function Login() {
  return (
    <Stack gap={3}>
      <div className="Login">
          <h1>Login</h1>
        
          <AuthenticatedApp />
       
      </div>
    </Stack>
  );
}

