import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Table = ({ data, columns, className = "" }) => {
    return (_jsx("div", { className: `overflow-x-auto ${className}`, children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsx("tr", { children: columns.map((column) => (_jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: column.title }, column.key))) }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: data.map((record, index) => (_jsx("tr", { children: columns.map((column) => (_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: column.render
                                ? column.render(record[column.key] === "id"
                                    ? index + 1
                                    : record[column.key], record)
                                : record[column.key] }, column.key))) }, index))) })] }) }));
};
export default Table;
