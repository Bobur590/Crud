import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Dropdown.tsx
import { useState, useEffect } from "react";
const Dropdown = ({ trigger, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const closeDropdown = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const target = event.target;
            if (!target.closest(".dropdown-container")) {
                closeDropdown();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return (_jsxs("div", { className: "dropdown-container relative inline-block", children: [_jsx("div", { onClick: toggleDropdown, className: "cursor-pointer", children: trigger }), isOpen && (_jsx("div", { className: "absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10", children: _jsx("ul", { className: "py-1", children: options.map((option, index) => (_jsx("li", { className: "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer", onClick: () => {
                            // Close dropdown when an option is selected
                            closeDropdown();
                            // Call the onClick handler if it exists
                            option.onClick && option.onClick();
                        }, children: option.type === "button" ? (
                        // If the option type is 'button', render a button
                        _jsx("button", { className: "w-full text-left", children: option.label })) : (
                        // If the option type is 'text', just render a span
                        _jsx("span", { children: option.label })) }, index))) }) }))] }));
};
export default Dropdown;
