import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "./Button"; // Button komponentasini import qilamiz
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen)
        return null; // Modal faqat isOpen true bo'lganda ko'rinadi
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: _jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md", children: [_jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [_jsx("h3", { className: "text-lg font-medium", children: title }), _jsx(Button, { variant: "secondary", onClick: onClose, children: "\u00D7 " })] }), _jsx("div", { className: "p-4 max-h-96 overflow-auto", children: children })] }) }));
};
export default Modal;
