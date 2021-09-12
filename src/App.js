import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";

import Container from "./Components/Container";
import AppBar from "./Components/AppBar";
import LoaderIndicator from "./Components/Loader";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import { authOperations } from "./Redux/auth";

import "./styles.scss";

const HomeView = lazy(() => import("./Views/HomeView"));
const RegisterView = lazy(() => import("./Views/RegisterView"));
const LoginView = lazy(() => import("./Views/LogInView"));
const ContactsView = lazy(() => import("./Views/PhonebookView"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<LoaderIndicator />}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
};

export default App;
