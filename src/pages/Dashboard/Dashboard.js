import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, Pagination } from 'antd';
import { BiCategory } from 'react-icons/bi';
import { FaCircleQuestion, FaUsers } from 'react-icons/fa6';
import { PiArrowsOutCardinal } from 'react-icons/pi';
import ChartOne from './Chart'; // Assuming ChartOne is in the same directory
const { Option } = Select;
const Dashboard = () => {
    const cardData = [
        { title: "Умумий категория", icon: _jsx(BiCategory, { className: "text-2xl text-primary" }) },
        { title: "Умумий савол", icon: _jsx(FaCircleQuestion, { className: "text-2xl text-primary" }) },
        { title: "Умумий натижа", icon: _jsx(PiArrowsOutCardinal, { className: "text-2xl text-primary" }) },
        { title: "Жами фойдаланувчилар", icon: _jsx(FaUsers, { className: "text-2xl text-primary" }) },
    ];
    return (_jsxs("div", { className: "p-4", children: [_jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4", children: cardData.map((card, index) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 dark:text-white", children: card.title }), _jsx("p", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "0" })] }), _jsx("div", { className: "w-14 h-14 flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700", children: card.icon })] }, index))) }), _jsx("div", { className: "mt-6", children: _jsx(ChartOne, {}) }), _jsxs("div", { className: "mt-10", children: [_jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-4", children: [_jsxs(Select, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043D\u0438 \u0442\u0430\u043D\u043B\u0430\u043D\u0433", className: "w-full sm:w-1/2", style: { height: 40 }, allowClear: true, children: [_jsx(Option, { value: "1", children: "Category 1" }), _jsx(Option, { value: "2", children: "Category 2" })] }), _jsxs(Select, { placeholder: "\u0412\u0438\u043B\u043E\u044F\u0442\u043D\u0438 \u0442\u0430\u043D\u043B\u0430\u043D\u0433", className: "w-full sm:w-1/2", style: { height: 40 }, allowClear: true, children: [_jsx(Option, { value: "1", children: "Region 1" }), _jsx(Option, { value: "2", children: "Region 2" })] })] }), _jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto", children: _jsxs("table", { className: "w-full table-auto border-collapse", children: [_jsx("thead", { className: "bg-gray-200 dark:bg-gray-700", children: _jsx("tr", { children: ["Т/Р", "Исм", "Фамилия", "Категория номи", "Натижа (Тўғри жавоблар/Умумий саволлар)"].map((header, idx) => (_jsx("th", { className: "px-4 py-2 text-left text-gray-800 dark:text-white font-medium", children: header }, idx))) }) }), _jsx("tbody", { children: _jsx("tr", { children: _jsx("td", { colSpan: 5, className: "px-4 py-4 text-center text-gray-500 dark:text-gray-300", children: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0442\u043E\u043F\u0438\u043B\u043C\u0430\u0434\u0438" }) }) })] }) }), _jsx("div", { className: "mt-6 flex justify-center", children: _jsx(Pagination, { showSizeChanger: false, responsive: true, defaultCurrent: 1, total: 10 }) })] })] }));
};
export default Dashboard;
