import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Checkbox = ({ type, label, value, checked = false, onChange = () => { }, }) => {
    const id = label && `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;
    return (_jsxs("label", { htmlFor: id, className: `w-full border text-lg text-gray-800 p-4 rounded-lg flex items-center ${checked ? 'border-blue-500 bg-blue-100' : 'border-[#44556A]'}`, children: [_jsx("input", { id: id, type: type, name: 'answer', className: 'form-radio text-blue-600 w-6 h-6 mr-4', value: value, checked: checked, onChange: () => value && onChange(value) }), label] }));
};
export default Checkbox;
