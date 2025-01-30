import { jsx as _jsx } from "react/jsx-runtime";
import Quiz from "../pages/Test/quiz";
import ResultPage from "../pages/Test/result";
import Results from "../pages/Test/Results";
import Dashboard from "../pages/Dashboard/Dashboard";
import Categories from "../pages/Categories/Categories";
import Test from "../pages/Test/Test";
import Users from "../pages/Users/Users";
import Employees from "../pages/Employees/Employees";
import Addresses from "../pages/Addresses/Addresses";
import Login from "../auth/LoginForm/login";
import Register from "../auth/RegisterForm/register";
import ForgotPassword from "../auth/PasswordPage/ForgetPassword/forget";
import ResetPassword from "../auth/PasswordPage/ResetPassword/reset";
import VerifyCode from "@/auth/VerifyCode/VerifyfCode";
import UserResults from "@/pages/User-results/UserResults";
export const publicRoutes = [
    { path: "/tests/:id", element: _jsx(Quiz, {}) },
    { path: "/result", element: _jsx(ResultPage, {}) },
];
export const authRoutes = [
    { path: "/login", element: _jsx(Login, {}) },
    { path: "/register", element: _jsx(Register, {}) },
    { path: "/changepass", element: _jsx(ForgotPassword, {}) },
    { path: "/reset-password", element: _jsx(ResetPassword, {}) },
    { path: "/verify-code", element: _jsx(VerifyCode, {}) },
];
export const adminRoutes = [
    { path: "dashboard", element: _jsx(Dashboard, {}), roles: ["ROLE_SUPER_ADMIN"] },
    { path: "users", element: _jsx(Users, {}), roles: ["ROLE_SUPER_ADMIN"] },
    {
        path: "categories",
        element: _jsx(Categories, {}),
        roles: ["ROLE_TESTER", "ROLE_SUPER_ADMIN"],
    },
    {
        path: "test",
        element: _jsx(Test, {}),
        roles: ["ROLE_TESTER", "ROLE_SUPER_ADMIN", "ROLE_USER", "ROLE_CLIENT"],
    },
    {
        path: "user-results",
        element: _jsx(UserResults, {}),
        roles: ["ROLE_SUPER_ADMIN", "ROLE_ADMIN"],
    },
    { path: "employees", element: _jsx(Employees, {}), roles: ["ROLE_SUPER_ADMIN"] },
    { path: "results", element: _jsx(Results, {}), roles: ["ROLE_CLIENT"] },
    { path: "addresses", element: _jsx(Addresses, {}), roles: ["ROLE_SUPER_ADMIN"] },
];
