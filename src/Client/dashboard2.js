import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard2() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const dashboardData = {
        user: {
            name: "sdff sdrb",
            email: "alishersodiqov09@gmail.com",
            avatarUrl: "https://via.placeholder.com/150"
        },
        dropdownItems: [
            {
                label: "Профил",
                icon: "https://via.placeholder.com/150"
            },
            {
                label: "Чиқиш",
                icon: "https://via.placeholder.com/150"
            }
        ],
        card: {
            title: "test",
            answers: "Тўғри жавоблар:",
            duration: "Вақт давомийлиги:",
            score: "Тўпланган балл:",
            date: "Тест топширилган сана:",
            previewText: "Preview",
            imageUrl: "https://cdn-icons-png.flaticon.com/128/11502/11502607.png",
            additionalInfo: "Қўшимча йўналишлардан ишланганлар",
            buttonText: "Кутилмоқда"
        },
        section: {
            title: "1/3",
            duration: "2 дақ.",
            score: "3.3",
            answers: "03.12.2024",
        },
        modal: {
            title: "Сиз аник тизмадан чиқмоқчимиз?",
            confirmButtonText: "Ҳа",
            cancelButtonText: "Йўқ"
        }
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    // const openModal = () => {
    //     setIsModalOpen(true);
    // };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleLogout = () => {
        navigate("/Register");
    };
    return (_jsxs("div", { className: "min-h-screen flex bg-gray-100 flex-col", children: [_jsxs("header", { className: "w-full bg-white shadow-md p-4 flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "GEADEZIST" }), _jsxs("div", { className: "flex items-center space-x-4 relative", children: [_jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-gray-800 font-medium", children: dashboardData.user.name }), _jsx("p", { className: "text-sm text-gray-500", children: dashboardData.user.email })] }), _jsx("img", { className: "w-10 h-10 rounded-full", src: dashboardData.user.avatarUrl, alt: "User Avatar" }), _jsx("button", { onClick: toggleDropdown, className: "text-gray-600 hover:text-black focus:outline-none", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 9l6 6 6-6" }) }) }), isDropdownOpen && (_jsx("div", { className: "absolute right-0 mt-52 w-80 bg-white shadow-lg rounded-md py-2", children: dashboardData.dropdownItems.map((item, index) => (_jsxs("a", { href: "#profile", className: "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100", children: [_jsx("img", { className: "h-10 w-10 mr-2 text-gray-500", src: item.icon, alt: "Icon" }), item.label] }, index))) }))] })] }), _jsxs("div", { className: "flex flex-1", children: [_jsx("aside", { className: "w-80 bg-white shadow-lg p-4", children: _jsx("div", { className: "flex flex-col items-center", children: _jsxs("nav", { className: "w-72 space-y-52", children: [_jsx("button", { className: "w-full h-14 text-left text-xl translate-y-44 text-gray-700 hover:bg-gray-200 p-3 rounded-lg shadow-lg transition", children: "\u0422\u0435\u0441\u0442" }), _jsx("button", { className: "w-full h-14 text-left text-xl text-gray-700 hover:bg-gray-200 p-3 rounded-lg shadow-lg transition", children: "\u041D\u0430\u0442\u0438\u0436\u0430\u043B\u0430\u0440 \u0431\u045E\u043B\u0438\u043C\u0438" })] }) }) }), _jsxs("main", { className: "flex-1 p-24", children: [_jsxs("header", { className: "flex justify-between items-center mb-40", children: [_jsx("h2", { className: "text-2xl translate-y-32 font-semibold text-black-600", children: dashboardData.user.name }), _jsx("h2", { className: "text-4xl -translate-y-3 -translate-x-96 font-bold text-red-600", children: "\u0421\u0438\u0437\u043D\u0438\u043D\u0433 \u043D\u0430\u0442\u0438\u0436\u0430\u043B\u0430\u0440\u0438\u043D\u0433\u0438\u0437" })] }), _jsxs("div", { className: "max-w-md rounded overflow-hidden shadow-xl relative group", children: [_jsxs("div", { className: "w-96 h-52 flex items-center justify-center ml-8 translate-y-6 -mb-16 relative", children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-96 h-64 translate-y-8 bg-gray-200 text-gray-500", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }), _jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }), _jsx("path", { d: "M21 15l-5-5L5 21" })] }), _jsxs("div", { className: "rounded-md absolute inset-0 bg-gray-800 h-64 translate-y-2 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition", children: [_jsx("img", { src: dashboardData.card.imageUrl, alt: "Eye Icon", className: "w-12 h-12" }), _jsx("h1", { className: "", children: dashboardData.card.previewText })] })] }), _jsxs("div", { className: "px-6 py-4", children: [_jsx("h3", { className: "text-xl translate-y-32 font-semibold text-red-600 text-center mb-8", children: dashboardData.card.title }), _jsxs("div", { className: "text-xl text-gray-600 space-y-3 font-sans translate-y-32", children: [_jsx("p", { children: dashboardData.card.answers }), _jsx("p", { children: dashboardData.card.duration }), _jsx("p", { children: dashboardData.card.score }), _jsx("p", { children: dashboardData.card.date })] }), _jsxs("div", { className: "text-base font-sans -translate-y-4 mb-6 space-y-4", children: [_jsx("p", { className: "font-bold text-right text-gray-500", children: dashboardData.section.title }), _jsx("p", { className: "font-bold text-right text-gray-500", children: dashboardData.section.duration }), _jsx("p", { className: "font-bold text-right text-gray-500", children: dashboardData.section.score }), _jsx("p", { className: "font-bold text-right text-gray-500", children: dashboardData.section.answers })] }), _jsx("p", { className: "text-red-600 font-medium mt-3 text-center text-xl", children: dashboardData.card.additionalInfo })] }), _jsx("div", { className: "px-6 pt-4 pb-2 text-center", children: _jsx("button", { className: "min-w-96 mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition", children: dashboardData.card.buttonText }) })] })] })] }), isModalOpen && (_jsx("div", { className: "fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg", children: [_jsx("h3", { className: "text-xl mb-4", children: dashboardData.modal.title }), _jsxs("div", { className: "flex justify-end space-x-4", children: [_jsx("button", { onClick: closeModal, className: "px-4 py-2 bg-gray-500 text-white rounded", children: dashboardData.modal.cancelButtonText }), _jsx("button", { onClick: handleLogout, className: "px-4 py-2 bg-red-500 text-white rounded", children: dashboardData.modal.confirmButtonText })] })] }) }))] }));
}
export default Dashboard2;
