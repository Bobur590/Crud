import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md"; // Edit va Delete ikonkalari
import Button from "../../components/Button"; // Button komponenti
import Table from "../../components/Table/Table"; //e komponenti
import Modal from "../../components/modal"; //l komponenti
import { toast, ToastContainer } from "react-toastify"; // Toastify import qilish
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
const Region = () => {
    const [regionName, setRegionName] = useState(""); // Region nomi
    const [regions, setRegions] = useState([]); // Backenddan olingan regionlar
    const [isModalOpen, setIsModalOpen] = useState(false); // Region qo'shish uchun modal holati
    const [deleteModalOpen, setDeleteModalOpen] = useState(false); // Region o'chirish modalini ochish
    const [editModalOpen, setEditModalOpen] = useState(false); // Region tahrirlash modalini ochish
    const [selectedRegion, setSelectedRegion] = useState(null); // O'chiriladigan yoki tahrirlanadigan region
    const [editedRegionName, setEditedRegionName] = useState(""); // Tahrirlanadigan regionning nomi
    const token = localStorage.getItem('token');
    // const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MzQ2MjM1NjcsImV4cCI6MTczNDcwOTk2N30.ZAGQPF702MqpS1_kmjMsi5eU8xu6yUldWhDKjRrDT9BMofCNWZun7LGPDtJTDsP3H-esiBOlzyhtZWTdiBB7WQ"
    // Regionlarni backenddan olish
    const fetchRegions = async () => {
        try {
            const response = await axios.get("http://142.93.106.195:9090/region", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                setRegions(response.data.body);
            }
            else {
                toast.error("Regionlarni olishda xato yuz berdi");
            }
        }
        catch (err) {
            toast.error("Regionlarni olishda xato yuz berdi");
            console.error(err);
        }
    };
    const handleRegionSubmit = async (event) => {
        event.preventDefault();
        if (!regionName) {
            toast.warn("Iltimos, region nomini kiriting.");
            return;
        }
        try {
            const response = await axios.post("http://142.93.106.195:9090/region", { name: regionName }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                toast.success("Region muvaffaqiyatli qo'shildi");
                setRegionName("");
                setIsModalOpen(false);
                fetchRegions();
            }
            else {
                toast.error("Region qo'shishda xato yuz berdi");
            }
        }
        catch (err) {
            toast.error("Region qo'shishda xato yuz berdi");
            console.error(err);
        }
    };
    const deleteRegion = async (id) => {
        try {
            const response = await axios.delete(`http://142.93.106.195:9090/region/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                toast.success("Region muvaffaqiyatli o'chirildi");
                fetchRegions();
            }
            else {
                toast.error("Regionni o'chirishda xato yuz berdi");
            }
        }
        catch (err) {
            toast.error("Regionni o'chirishda xato yuz berdi");
            console.error(err);
        }
    };
    const editRegion = async (id, name) => {
        try {
            const response = await axios.put(`http://142.93.106.195:9090/region/${id}`, { name: name }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                toast.success("Region muvaffaqiyatli tahrirlandi");
                fetchRegions();
            }
            else {
                toast.error("Regionni tahrirlashda xato yuz berdi");
            }
        }
        catch (err) {
            toast.error("Regionni tahrirlashda xato yuz berdi");
            console.error(err);
        }
    };
    useEffect(() => {
        fetchRegions();
    }, []);
    const columns = [
        { key: "id", title: "ID" },
        { key: "name", title: "Region nomi" },
        {
            key: "action",
            title: "Action",
            render: (value, record) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("button", { onClick: () => {
                            setSelectedRegion(record);
                            setDeleteModalOpen(true);
                        }, className: "text-gray-600 hover:text-red-800", children: _jsx(MdDelete, { className: "text-lg" }) }), _jsx("button", { onClick: () => {
                            setSelectedRegion(record);
                            setEditedRegionName(record.name);
                            setEditModalOpen(true);
                        }, className: "text-gray-600  hover:text-yellow-600", children: _jsx(MdEdit, { className: "text-lg" }) })] })),
        },
    ];
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-8", children: [_jsx("h1", { className: "text-2xl font-semibold mb-6", children: "Add New Region" }), _jsx(Button, { onClick: () => setIsModalOpen(true), className: "bg-gray-600 flex justify-center font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-700", children: "add Region" }), _jsx("div", { className: "mt-6", children: _jsx(Table, { data: regions, columns: columns, className: "overflow-x-auto" }) }), _jsx(Modal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), title: "Yangi Region Qo'shish", children: _jsxs("form", { onSubmit: handleRegionSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "regionName", className: "block text-sm font-medium text-gray-700", children: "Region Name" }), _jsx("input", { type: "text", id: "regionName", value: regionName, onChange: (e) => setRegionName(e.target.value), placeholder: "Region nomini kiriting", required: true, className: "mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" })] }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { variant: "danger", size: "medium", type: "submit", className: "bg-gray-600 text-white hover:bg-gray-700 py-2 px-4 rounded-md", children: "Qo'shish" }) })] }) }), _jsx(Modal, { isOpen: deleteModalOpen, onClose: () => setDeleteModalOpen(false), title: "Regionni o'chirish", children: _jsxs("div", { children: [_jsx("p", { children: "Ushbu regionni o'chirishni tasdiqlaysizmi?" }), selectedRegion && (_jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: selectedRegion.name }), _jsxs("div", { className: "flex justify-end mt-4", children: [_jsx(Button, { onClick: () => {
                                                if (selectedRegion) {
                                                    deleteRegion(selectedRegion.id); // Regionni o'chirish
                                                }
                                                setDeleteModalOpen(false); // Modalni yopish
                                            }, className: "bg-red-600 text-white hover:bg-red-700 py-2 px-4 rounded-md", children: "O'chirish" }), _jsx(Button, { onClick: () => setDeleteModalOpen(false), className: "bg-gray-600 text-white hover:bg-gray-700 py-2 px-4 rounded-md ml-2", children: "Yopish" })] })] }))] }) }), _jsx(Modal, { isOpen: editModalOpen, onClose: () => setEditModalOpen(false), title: "Regionni tahrirlash", children: _jsxs("form", { onSubmit: (e) => {
                        e.preventDefault();
                        if (selectedRegion) {
                            editRegion(selectedRegion.id, editedRegionName); // Regionni tahrirlash
                            setEditModalOpen(false); // Modalni yopish
                        }
                    }, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "editedRegionName", className: "block text-sm font-medium text-gray-700", children: "Region nomini tahrirlang" }), _jsx("input", { type: "text", id: "editedRegionName", value: editedRegionName, onChange: (e) => setEditedRegionName(e.target.value), placeholder: "Region nomini tahrirlang", required: true, className: "mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" })] }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { variant: "danger", size: "medium", type: "submit", className: "bg-gray-600 text-white hover:bg-gray-700 py-2 px-4 rounded-md", children: "Tahrirlamoq" }) })] }) }), _jsx(ToastContainer, {})] }));
};
export default Region;
