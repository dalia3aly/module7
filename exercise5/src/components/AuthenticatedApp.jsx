import { useUserContext } from "@/context/UserContext";
import PostsPage from "@/app/posts/page";
import LoginForm from "@/components/LoginForm";

export default function AuthenticatedApp() {
  const { currentUser } = useUserContext();

  if (currentUser.email) {
    return <PostsPage />;
  }

  return <LoginForm />;
}