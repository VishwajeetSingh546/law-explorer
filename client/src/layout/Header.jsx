import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Law Explorer</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/module">Modules</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
