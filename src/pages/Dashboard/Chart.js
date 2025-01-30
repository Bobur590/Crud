import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const ChartOne = () => {
    const data = {
        labels: ["Сешанба", "Чоршанба"],
        datasets: [
            {
                label: "Ҳафталик маълумот",
                data: [0, 5],
                borderColor: "#3B82F6",
                backgroundColor: "#3B82F6",
                tension: 0.4,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: { display: true },
        },
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true, max: 200 },
        },
    };
    return (_jsxs("div", { className: "rounded-sm border bg-white px-5 pt-7.5 pb-5 shadow-lg dark:bg-boxdark dark:border-strokedark sm:px-7.5 xl:col-span-8", children: [_jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap", children: [_jsxs("div", { className: "flex min-w-47.5", children: [_jsx("span", { className: "mt-1 mr-2 flex h-4 w-4 items-center justify-center rounded-full border border-primary", children: _jsx("span", { className: "block h-2.5 w-2.5 rounded-full bg-primary" }) }), _jsx("div", { children: _jsx("p", { className: "font-semibold text-primary", children: "\u04B2\u0430\u0444\u0442\u0430\u043B\u0438\u043A \u043C\u0430\u044A\u043B\u0443\u043C\u043E\u0442" }) })] }), _jsx("button", { className: "rounded py-1 px-3 text-xs font-medium text-black dark:text-white dark:hover:bg-boxdark", children: "\u04B2\u0430\u0444\u0442\u0430" })] }), _jsx("div", { className: "mt-6", children: _jsx(Line, { data: data, options: options }) })] }));
};
export default ChartOne;
