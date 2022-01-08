import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact activeClassName="selected" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="selected" to="/login">
        Login
      </NavLink>
      <NavLink exact activeClassName="selected" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink exact activeClassName="selected" to="/dashboard/settings">
        Settings
      </NavLink>
    </nav>
  );
}

export default Navbar;
