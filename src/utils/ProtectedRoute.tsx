import { Navigate } from "react-router-dom";
import type { UserTypo } from "./types";


type ProtectedRouteProps = {
        children: React.ReactNode;
        user: UserTypo | null;
        redirectPath?: string;
        admitedRoles?: string[];
    };

 function ProtectedRoute({
    children,
    user,
    redirectPath = "/login",
    admitedRoles = [],
}: ProtectedRouteProps) {
    // If the user is not authenticated, redirect to the login page
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    const hasRole = admitedRoles.includes(user.role);

    if (!hasRole) {
        return <Navigate to="/notenaughrank" replace />;
    }

    // If the user is authenticated and has the required role, render the children components
    return <>{children}</>;
}
export default ProtectedRoute;