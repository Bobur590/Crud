import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AdminLayout from '../Layout/AdminLayout';
import Addresses from '../pages/Addresses/Addresses';
import Categories from '../pages/Categories/Categories';
import Dashboard from '../pages/Dashboard/Dashboard';
import Employees from '../pages/Employees/Employees';
import Test from '../pages/Test/Test';
import UserResults from '../pages/User-results/UserResults';
import Users from '../pages/Users/Users';
import Login from '@/auth/LoginForm/login';
import Register from '@/auth/RegisterForm/register';
import ForgotPassword from '@/auth/PasswordPage/ForgetPassword/forget';
import ResetPassword from '@/auth/PasswordPage/ResetPassword/reset';
import VerifyCode from '@/auth/VerifyCode/VerifyfCode';
import Results from '@/pages/Test/Results';
import NotFound from '@/pages/notfound';
// import NotFound from '@/pages/notFound';
// import Distric from '@/pages/Addresses/distric';
const AppRoutes = () => {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();
    if (!role)
        navigate('/login');
    const getDefaultRedirectPath = () => {
        switch (role) {
            case 'ROLE_TESTER':
                return '/categories';
            case 'ROLE_ADMIN':
                return '/user-results';
            case 'ROLE_SUPER_ADMIN':
                return '/dashboard';
            case 'ROLE_CLIENT':
                return '/result';
            default:
                return '/login';
        }
    };
    const protectedRoute = (roles, component) => {
        const hasAccess = Array.isArray(roles)
            ? roles.includes(role || '')
            : role === roles;
        return hasAccess ? component : _jsx(Navigate, { to: '/login' });
    };
    return (_jsxs(Routes, { children: [_jsx(Route, { path: '/register', element: _jsx(Register, {}) }), _jsx(Route, { path: '/changepass', element: _jsx(ForgotPassword, {}) }), _jsx(Route, { path: '/reset-password', element: _jsx(ResetPassword, {}) }), _jsx(Route, { path: '/verfy-code', element: _jsx(VerifyCode, {}) }), _jsx(Route, { path: '/*', element: _jsx(NotFound, {}) }), _jsx(Route, { path: '/login', element: role ? _jsx(Navigate, { to: getDefaultRedirectPath() }) : _jsx(Login, {}) }), _jsxs(Route, { path: '/', element: role ? _jsx(AdminLayout, {}) : _jsx(Navigate, { to: '/login' }), children: [_jsx(Route, { path: 'dashboard', element: _jsx(Dashboard, {}) }), _jsx(Route, { path: 'users', element: protectedRoute('ROLE_SUPER_ADMIN', _jsx(Users, {})) }), _jsx(Route, { path: 'categories', element: protectedRoute(['ROLE_TESTER', 'ROLE_SUPER_ADMIN'], _jsx(Categories, {})) }), _jsx(Route, { path: 'test', element: protectedRoute(['ROLE_TESTER', 'ROLE_SUPER_ADMIN', 'ROLE_CLIENT'], _jsx(Test, {})) }), _jsx(Route, { path: 'user-results', element: protectedRoute(['ROLE_SUPER_ADMIN', 'ROLE_ADMIN'], _jsx(UserResults, {})) }), _jsx(Route, { path: 'employees', element: protectedRoute('ROLE_SUPER_ADMIN', _jsx(Employees, {})) }), _jsx(Route, { path: 'result', element: protectedRoute('ROLE_CLIENT', _jsx(Results, {})) }), _jsx(Route, { path: 'addresses', element: protectedRoute('ROLE_SUPER_ADMIN', _jsx(Addresses, {})) })] })] }));
};
export default AppRoutes;
