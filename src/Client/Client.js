import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
function Dashboard2() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [certificateData, setCertificateData] = useState(null);
    const dashboardData = {
        user: {
            name: "sdff sdrb",
            email: "alishersodiqov09@gmail.com",
            avatarUrl: "https://via.placeholder.com/150"
        },
        dropdownItems: [
            {
                label: "Профиль",
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
            additionalInfo: "Қошимча маълумотлар",
            buttonText: "Кутилаётган"
        },
        section: {
            title: "1/3",
            duration: "2 дақ.",
            score: "3.3",
            answers: "03.12.2024"
        },
        mode: {
            imageUrl: "https://cdn-icons-png.flaticon.com/128/11502/11502607.png",
            cancelButtonText: "Чиқиш"
        },
        modal: {
            title: "Сиз аник тизмадан чиқмоқчимисиз?",
            confirmButtonText: "Ҳа",
            cancelButtonText: "Йўқ"
        }
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };
    const openImageModal = (imageUrl) => {
        if (imageUrl) {
            setIsModalOpen(true); // Open modal only if imageUrl is provided
        }
    };
    useEffect(() => {
        axios
            .get("http://142.93.106.195:9090/certificate/2")
            .then((response) => {
            setCertificateData(response.data);
        })
            .catch((error) => {
            console.error("Error fetching certificate data:", error);
        });
    }, []);
    return (_jsxs("div", { className: "min-h-screen flex bg-gray-100 flex-col", children: [_jsxs("header", { className: "w-full bg-white shadow-md p-4 flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "GEADEZIST" }), _jsxs("div", { className: "flex items-center space-x-4 relative", children: [_jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-gray-800 font-medium", children: dashboardData.user.name }), _jsx("p", { className: "text-sm text-gray-500", children: dashboardData.user.email })] }), _jsx("img", { className: "w-10 h-10 rounded-full", src: dashboardData.user.avatarUrl, alt: "User Avatar" }), _jsx("button", { onClick: toggleDropdown, className: "text-gray-600 hover:text-black focus:outline-none", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 9l6 6 6-6" }) }) }), isDropdownOpen && (_jsx("div", { className: "absolute right-0 mt-52 w-80 bg-white shadow-lg rounded-md py-2", children: dashboardData.dropdownItems.map((item, index) => (_jsxs("a", { href: "#profile", className: "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100", children: [_jsx("img", { className: "h-10 w-10 mr-2 text-gray-500", src: item.icon, alt: "Icon" }), item.label] }, index))) }))] })] }), _jsxs("div", { className: "flex flex-1", children: [_jsx("aside", { className: "w-80 bg-white shadow-lg p-4", children: _jsx("div", { className: "flex flex-col items-center", children: _jsxs("nav", { className: "w-72 space-y-52", children: [_jsx("button", { className: "w-full h-14 text-left text-xl translate-y-44 text-gray-700 hover:bg-gray-200 p-3 rounded-lg shadow-lg transition", children: "\u0422\u0435\u0441\u0442" }), _jsx("button", { className: "w-full h-14 text-left text-xl text-gray-700 hover:bg-gray-200 p-3 rounded-lg shadow-lg transition", children: "\u041D\u0430\u0442\u0438\u0436\u0430\u043B\u0430\u0440 \u0431\u045E\u043B\u0438\u043C\u0438" })] }) }) }), _jsxs("main", { className: "flex-1 p-24", children: [_jsxs("header", { className: "flex justify-between items-center mb-40", children: [_jsx("h2", { className: "text-2xl translate-y-32 font-semibold text-black-600", children: dashboardData.user.name }), _jsx("h2", { className: "text-4xl -translate-y-3 -translate-x-96 font-bold text-red-600", children: "\u0421\u0438\u0437\u043D\u0438\u043D\u0433 \u043D\u0430\u0442\u0438\u0436\u0430\u043B\u0430\u0440\u0438\u043D\u0433\u0438\u0437" })] }), _jsx("div", { className: "max-w-md rounded overflow-hidden shadow-xl relative group", children: certificateData ? (_jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold text-center", children: certificateData.title }), _jsx("p", { className: "mt-4 text-gray-600", children: certificateData.description }), _jsxs("p", { className: "mt-2 text-gray-600", children: ["\u0411\u0430\u043B\u043B\u044B: ", certificateData.score] }), _jsxs("p", { className: "mt-2 text-gray-600", children: ["\u0414\u0430\u0442\u0430: ", certificateData.date] }), certificateData.imageUrl && (_jsx("button", { onClick: () => openImageModal(certificateData.imageUrl), className: "mt-4 bg-blue-500 text-white py-2 px-4 rounded", children: "Open Image" }))] })) : (_jsx("p", { className: "text-center text-gray-500", children: "yuklanmoqda..." })) }), isModalOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: _jsxs("div", { className: "bg-white p-6 rounded-md shadow-lg max-w-sm w-full", children: [_jsx("h3", { className: "text-xl font-semibold", children: dashboardData.modal.title }), _jsxs("div", { className: "mt-4 flex justify-between", children: [_jsx("button", { onClick: closeModal, className: "bg-gray-300 text-gray-700 px-4 py-2 rounded-md", children: dashboardData.modal.cancelButtonText }), _jsx("button", { onClick: closeModal, className: "bg-blue-500 text-white px-4 py-2 rounded-md", children: dashboardData.modal.confirmButtonText })] })] }) }))] })] })] }));
}
export default Dashboard2;
