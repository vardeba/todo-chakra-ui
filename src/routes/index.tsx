import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Route } from "./Route";
import { Dashboard } from "../pages/Dashboard";

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
);
