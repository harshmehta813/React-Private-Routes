import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Dashboard from "../Pages/Dashboard";
import Settings from "../Pages/Settings";

function PrivateRoutes() {
  const [Auth] = useContext(AuthContext);

  return (
    <>
      <Switch>
        <Route eaxct path="/dashboard/settings">
          {Auth ? <Settings /> : <Redirect to="/login" />}
        </Route>
        <Route eaxct path="/dashboard">
          {Auth ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </>
  );
}

export default PrivateRoutes;
