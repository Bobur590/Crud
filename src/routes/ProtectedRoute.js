import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, roles, redirectTo, }) => {
    const role = localStorage.getItem("role");
    const hasAccess = role && roles.includes(role);
    return hasAccess ? children : _jsx(Navigate, { to: redirectTo });
};
export default ProtectedRoute;
