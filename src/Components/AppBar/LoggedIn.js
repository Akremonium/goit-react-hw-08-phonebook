import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../Redux/auth/auth-selectors";
import operations from "../../Redux/auth/auth-operations";

const LoggedIn = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span>Wellcome, {name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Log out
      </button>
    </div>
  );
};

export default LoggedIn;
