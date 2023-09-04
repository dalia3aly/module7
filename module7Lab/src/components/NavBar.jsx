import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/bitcoin-rates">Bitcoin Rates</Link>
    </nav>
  );
}

export default NavBar;