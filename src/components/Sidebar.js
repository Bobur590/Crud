import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [role, setRole] = useState(null);
    const location = useLocation();
    const menuItems = [
        {
            name: "Бошқарув панели",
            path: "/dashboard",
            roles: ["ROLE_SUPER_ADMIN"],
        },
        {
            name: "Категория",
            path: "/categories",
            roles: ["ROLE_SUPER_ADMIN", "ROLE_TESTER"],
        },
        {
            name: "Тест",
            path: "/test",
            roles: ["ROLE_SUPER_ADMIN", "ROLE_TESTER", "ROLE_CLIENT"],
        },
        {
            name: "Фойдаланувчилар",
            path: "/users",
            roles: ["ROLE_SUPER_ADMIN"],
        },
        {
            name: "Фойдаланувчилар натижаси",
            path: "/user-results",
            roles: ["ROLE_SUPER_ADMIN", "ROLE_ADMIN"],
        },
        {
            name: "Ходимлар",
            path: "/employees",
            roles: ["ROLE_SUPER_ADMIN"],
        },
        {
            name: "Манзил",
            path: "/addresses",
            roles: ["ROLE_SUPER_ADMIN"],
        },
        {
            name: "Натижалар булими",
            path: "/result",
            roles: ["ROLE_CLIENT"],
        },
    ];
    // Sidebar toggle function for mobile
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    // Retrieve the user's role from localStorage on component mount
    useEffect(() => {
        const storedRole = localStorage.getItem("role");
        setRole(storedRole);
    }, []); // Only run once on mount
    return (_jsx("div", { children: role !== "admin" && (_jsxs("div", { className: "relative", children: [_jsx("button", { className: "lg:hidden p-4 text-black", onClick: toggleSidebar, children: "\u2630" }), _jsxs("div", { className: `lg:block w-64 bg-white text-slate-900 fixed inset-0 lg:relative lg:w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`, children: [_jsx("div", { className: "lg:hidden w-full text-right", children: _jsx("button", { onClick: toggleSidebar, className: "mt-4 mr-4", children: "\u2716" }) }), _jsx("ul", { className: "p-4 flex flex-col w-full bg-white gap-y-5 mt-20", children: menuItems
                                .filter((item) => item.roles.includes(role || ""))
                                .map((item) => (_jsx("li", { children: _jsx(Link, { to: item.path, className: `block w-full p-2 rounded border border-slate-400 text-left hover:bg-slate-100 ${location.pathname === item.path ? "bg-slate-200" : ""}`, onClick: toggleSidebar, children: item.name }) }, item.name))) })] })] })) }));
};
export default Sidebar;
