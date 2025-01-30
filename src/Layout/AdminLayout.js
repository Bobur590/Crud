import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import useAuthStore from "../store/useAuthStore";
const AdminLayout = () => {
    const { user } = useAuthStore(); // Foydalanuvchi ma'lumotini olish
    return (_jsxs("div", { className: "flex min-h-screen flex-col", children: [_jsx("header", { className: "w-full bg-white", children: _jsx(Header, {}) }), _jsxs("div", { className: "flex flex-1", children: [user?.role !== "admin" && (_jsx("div", { className: "lg:block w-64 bg-white hidden", children: _jsx(Sidebar, {}) })), _jsx("main", { className: "flex-1 p-4 bg-gray-200 overflow-auto", children: _jsx(Outlet, {}) })] })] }));
};
export default AdminLayout;
