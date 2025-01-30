import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Input = (props) => {
    const { label, error } = props;
    const baseClassName = "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
    const errorClassName = error ? "border-red-500" : "border-gray-300";
    if (props.type === 'select') {
        const { options, ...selectProps } = props;
        return (_jsxs("div", { className: "mb-4 w-full", children: [_jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: label }), _jsxs("select", { className: `${baseClassName} ${errorClassName} bg-white`, ...selectProps, children: [_jsx("option", { value: "", children: "Tanlang..." }), options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value)))] }), error && _jsx("p", { className: "mt-1 text-sm text-red-500", children: error })] }));
    }
    return (_jsxs("div", { className: "mb-4 w-full", children: [_jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: label }), _jsx("input", { className: `${baseClassName} ${errorClassName}`, ...props }), error && _jsx("p", { className: "mt-1 text-sm text-red-500", children: error })] }));
};
export default Input;
