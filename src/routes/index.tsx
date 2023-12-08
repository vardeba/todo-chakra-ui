import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Route } from "./Route";
import { Dashboard } from "../pages/Dashboard";
import { SignUp } from "../pages/SignUp";
import { PageNotFound } from "../pages/PageNotFound";
import { useAuth } from "../contexts/AuthContext";

export const Routes = () => {
    const { accessToken } = useAuth();

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route component={PageNotFound} isPrivate={!!accessToken} />
        </Switch>
    );
};
