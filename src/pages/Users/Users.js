import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Table from "../../components/Table/Table";
import Button from "../../components/Button";
import Modal from "../../components/modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// Define the provinces and districts
const provinces = {
    Toshkent: ["Chilonzor", "Yunusobod"],
    Samarqand: ["Oqdaryo", "Urgut"],
};
// Define the filter fields
const filterFields = [
    { key: "search", label: "Фойдаланувчи қидириш...", type: "text" },
    {
        key: "province",
        label: "Viloyat",
        type: "select",
        options: Object.keys(provinces),
    },
    { key: "district", label: "Туман", type: "select", options: [] },
];
const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [filters, setFilters] = useState({
        search: "",
        province: "",
        district: "",
    });
    const tableData = [
        {
            id: 1,
            firstname: "Ibrohim",
            lastname: "Ahmedov",
            birthday: "25",
            phumber: 998909990990,
            email: "ibrohim001@gmail.com",
            province: "Toshkent",
            district: "Chilonzor",
            street: "Amir Temur ko'chasi",
        },
        {
            id: 2,
            firstname: "Amir",
            lastname: "Normurodov",
            birthday: "20",
            phumber: 998909990990,
            email: "amir238@gmail.com",
            province: "Samarqand",
            district: "Urgut",
            street: "Gagarin ko'chasi",
        },
        {
            id: 3,
            firstname: "Boxodir",
            lastname: "Ernazarov",
            birthday: "11",
            phumber: 998909990990,
            email: "boxodir110@gmail.com",
            province: "Samarqand",
            district: "Oqdaryo",
            street: "Beruniy ko'chasi",
        },
        {
            id: 4,
            firstname: "Dilshod",
            lastname: "Eshmurodov",
            birthday: "31",
            phumber: 998909990990,
            email: "dilshod220@gmail.com",
            province: "Toshkent",
            district: "Yunusobod",
            street: "Navoi ko'chasi",
        },
    ];
    const filteredData = tableData.filter((user) => {
        const matchesSearch = user.firstname.toLowerCase().includes(filters.search.toLowerCase()) ||
            user.lastname.toLowerCase().includes(filters.search.toLowerCase());
        const matchesProvince = filters.province
            ? user.province === filters.province
            : true;
        const matchesDistrict = filters.district
            ? user.district === filters.district
            : true;
        return matchesSearch && matchesProvince && matchesDistrict;
    });
    const tableColumns = [
        { key: "id", title: "ID" },
        { key: "firstname", title: "Исм" },
        { key: "lastname", title: "Фамилия" },
        { key: "email", title: "Электрон почта" },
        { key: "province", title: "Вилоят" },
        { key: "district", title: "district" },
        {
            key: "actions",
            title: "Харакат",
            render: (_, record) => (_jsx(Button, { variant: "secondary", size: "medium", onClick: () => handleOpenModal(record) })),
        },
    ];
    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };
    const handleFilterChange = (key, value) => {
        setFilters((prev) => {
            const newFilters = { ...prev, [key]: value };
            if (key === "province") {
                newFilters.district = "";
            }
            return newFilters;
        });
    };
    return (_jsxs("div", { className: "p-4 bg-white shadow rounded", children: [_jsx("div", { className: "flex items-center justify-between mb-6", children: _jsx("h1", { className: "text-2xl pt-10 font-semibold text-gray-700", children: "\u0425\u043E\u0434\u0438\u043C\u043B\u0430\u0440" }) }), _jsx("div", { className: "flex items-center space-x-4 w-full mb-8", children: filterFields.map((field) => (_jsx("div", { className: "flex-1", children: field.type === "text" ? (_jsx("input", { type: "text", placeholder: field.label, value: filters[field.key], onChange: (e) => handleFilterChange(field.key, e.target.value), className: "w-full p-2 border border-gray-300 rounded-lg text-gray-700 h-[56px]" })) : (_jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { id: `${field.key}-select-label`, children: field.label }), _jsx(Select, { labelId: `${field.key}-select-label`, id: `${field.key}-select`, value: filters[field.key], label: field.label, onChange: (e) => handleFilterChange(field.key, e.target.value), sx: { height: "56px" }, children: (field.key === "district" && filters.province
                                    ? provinces[filters.province] || []
                                    : field.options || []).map((option) => (_jsx(MenuItem, { value: option, children: option }, option))) })] })) }, field.key))) }), _jsx(Table, { data: filteredData, columns: tableColumns, className: "mb-8" }), _jsx(Modal, { isOpen: isModalOpen, onClose: handleCloseModal, title: "Foydalanuvchi ma'lumotlari", children: selectedUser && (_jsxs("div", { children: [_jsxs("p", { className: "mb-4 flex justify-between", children: [_jsx("strong", { children: "To'liq Ismi:" }), _jsx("span", { children: `${selectedUser.firstname} ${selectedUser.lastname}` })] }), _jsxs("p", { className: "mb-4 flex justify-between", children: [_jsx("strong", { children: "Tug'ilgan kuni:" }), _jsx("span", { children: selectedUser.birthday })] }), _jsxs("p", { className: "mb-4 flex justify-between", children: [_jsx("strong", { children: "Telefon Raqami:" }), _jsx("span", { children: selectedUser.phumber })] }), _jsxs("p", { className: "mb-4 flex justify-between", children: [_jsx("strong", { children: "Elektron pochtasi:" }), _jsx("span", { children: selectedUser.email })] }), _jsxs("p", { className: "mb-4 flex justify-between", children: [_jsx("strong", { children: "Viloyati:" }), _jsx("span", { children: selectedUser.province })] }), _jsxs("p", { className: "mb-4 flex justify-between", children: [_jsx("strong", { children: "Tumani:" }), _jsx("span", { children: selectedUser.district })] }), _jsxs("p", { className: "mb-4 flex justify-between", children: [_jsx("strong", { children: "Ko'chasi:" }), _jsx("span", { children: selectedUser.street })] })] })) })] }));
};
export default Users;
