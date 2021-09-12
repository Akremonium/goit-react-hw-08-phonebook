import { useSelector } from "react-redux";
import authSelectors from "../../Redux/auth/auth-selectors";

import LoggedIn from "./LoggedIn";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <LoggedIn /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
