import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink to="/" exact>
      Home
    </NavLink>

    <NavLink to="/contacts" exact>
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
