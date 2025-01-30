import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import Sidebar from "./Sidebar";
const Header = () => {
    const { user } = useAuthStore();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        setIsModalOpen(false);
        localStorage.removeItem("token"); // Remove token to log out
        navigate("/login"); // Redirect to login page
    };
    return (_jsxs("header", { className: "bg-white text-slate-950 p-4 flex justify-between items-center", children: [_jsx("h1", { className: "text-xl font-bold hidden lg:block", children: "Geadezist Admin" }), _jsx("div", { className: "lg:hidden", children: _jsx(Sidebar, {}) }), _jsxs("div", { className: "flex items-center gap-4 mr-5 relative", children: [_jsxs("div", { className: "text-center font-medium dark:text-white", children: [_jsx("h1", { className: "text-sm text-black ", children: user?.name || "Guest" }), _jsx("div", { className: "text-sm text-gray-500 ", children: user?.role })] }), _jsx("img", { className: "w-10 h-10 rounded-full cursor-pointer", src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", alt: "profile", onClick: () => setIsDropdownOpen((prev) => !prev) }), isDropdownOpen && (_jsx("div", { className: "absolute top-12 right-0 bg-white shadow-lg rounded-md p-2 w-40", children: _jsxs("ul", { children: [_jsx("li", { className: "p-2 hover:bg-gray-100 cursor-pointer", onClick: () => console.log("Profile clicked"), children: "Profile" }), _jsx("li", { className: "p-2 hover:bg-gray-100 cursor-pointer", onClick: () => setIsModalOpen(true), children: "Logout" })] }) })), isModalOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg", children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: "Are you sure you want to logout?" }), _jsxs("div", { className: "flex justify-end gap-4", children: [_jsx("button", { className: "bg-gray-300 px-4 py-2 rounded", onClick: () => setIsModalOpen(false), children: "No" }), _jsx("button", { className: "bg-blue-500 text-white px-4 py-2 rounded", onClick: handleLogout, children: "Yes" })] })] }) }))] })] }));
};
export default Header;
