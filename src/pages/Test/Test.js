import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import deleteIcon from "./SVG/delete.png";
import { Link } from "react-router-dom";
const apiUrl = 'http://142.93.106.195:9090';
const QuestionTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [formData, setFormData] = useState({
        question: '',
        category: '',
        difficulty: '',
        type: '',
        options: [{ text: '', file: null, isCorrect: false }],
        image: null,
    });
    const [tableData, setTableData] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    // Fetch data from Swagger API endpoint
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`${apiUrl}/question-controller/questions`);
                const data = await response.json();
                setTableData(data);
            }
            catch (error) {
                toast.error('Error fetching data');
            }
        };
        fetchQuestions();
    }, []);
    const openModal = () => {
        setIsModalOpen(true);
        setEditIndex(null);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({
            question: '',
            category: '',
            difficulty: '',
            type: '',
            options: [{ text: '', file: null, isCorrect: false }],
            image: null,
        });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files?.[0] || null });
    };
    const handleOptionChange = (index, field, value) => {
        const updatedOptions = [...formData.options];
        updatedOptions[index] = { ...updatedOptions[index], [field]: value };
        if (field === 'isCorrect') {
            updatedOptions.forEach((option, idx) => {
                if (idx !== index)
                    option.isCorrect = false;
            });
        }
        setFormData({ ...formData, options: updatedOptions });
    };
    const addOption = () => {
        setFormData({ ...formData, options: [...formData.options, { text: '', file: null, isCorrect: false }] });
    };
    const saveData = () => {
        if (formData.question &&
            formData.category &&
            formData.difficulty &&
            formData.type &&
            formData.options.every((option) => option.text)) {
            if (editIndex !== null) {
                const updatedTableData = [...tableData];
                updatedTableData[editIndex] = formData;
                setTableData(updatedTableData);
            }
            else {
                setTableData([...tableData, formData]);
            }
            // Success toast
            toast.success('Savol muvaffaqiyatli saqlandi!', {
                position: "top-center", // Yuqoridan chiqadi
                autoClose: 3000, // 3 soniya davomida ko‘rsatiladi
                hideProgressBar: true, // Progress bar ni yashirish
                closeOnClick: true, // Kliklashda yopiladi
                pauseOnHover: true, // Hoverda to‘xtaydi
                draggable: true, // Surish mumkin
            });
            closeModal();
        }
        else {
            toast.error('Iltimos, barcha maydonlarni to‘ldiring!');
        }
    };
    const handleImageClick = (image) => {
        setCurrentImage(image);
        setShowImage(true);
    };
    const closeImageModal = () => {
        setShowImage(false);
    };
    const openDeleteModal = (index) => {
        setDeleteIndex(index);
        setIsDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteIndex(null);
    };
    const deleteQuestion = () => {
        const updatedTableData = [...tableData];
        updatedTableData.splice(deleteIndex, 1); // Using `!` to assert the non-null value
        setTableData(updatedTableData);
        toast.success('Savol muvaffaqiyatli o‘chirildi!');
        closeDeleteModal();
    };
    const openEditModal = (index) => {
        setEditIndex(index);
        setFormData(tableData[index]);
        setIsModalOpen(true);
    };
    return (_jsxs("div", { className: "container mx-auto p-4", children: [_jsx("button", { onClick: openModal, className: "bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800", children: "+ Savol qo'shish" }), _jsxs("div", { className: "text-sm text-gray-500 mt-2 text-end -translate-y-14 -translate-x-20 md:mt-0", children: [_jsx("span", { className: "font-medium text-gray-700", children: _jsx(Link, { to: "/dashboard", children: "\u0411\u043E\u0448\u049B\u0430\u0440\u0443\u0432 \u043F\u0430\u043D\u0435\u043B\u0438" }) }), " ", "/ ", _jsx("span", { className: "text-blue-600 font-medium", children: "\u0422\u0435\u0441\u0442" })] }), _jsxs("table", { className: "table-auto w-full mt-4 border border-gray-200", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100", children: [_jsx("th", { className: "border px-4 py-2", children: "Savol" }), _jsx("th", { className: "border px-4 py-2", children: "Kategoriya" }), _jsx("th", { className: "border px-4 py-2", children: "Qiyinchilik" }), _jsx("th", { className: "border px-4 py-2", children: "Turi" }), _jsx("th", { className: "border px-4 py-2", children: "Rasm" }), _jsx("th", { className: "border px-4 py-2", children: "Uzgartirishlar" })] }) }), _jsx("tbody", { children: tableData.map((data, index) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "border px-4 py-2", children: data.question }), _jsx("td", { className: "border px-4 py-2", children: data.category }), _jsx("td", { className: "border px-4 py-2", children: data.difficulty }), _jsx("td", { className: "border px-4 py-2", children: data.type }), _jsx("td", { className: "border px-4 py-2", children: data.image ? (_jsx("img", { src: URL.createObjectURL(data.image), alt: "Uploaded", className: "h-12 w-12 object-cover rounded cursor-pointer", onClick: () => handleImageClick(data.image) })) : ('Rasm yo‘q') }), _jsxs("td", { className: "border px-4 py-2 flex justify-center items-center space-x-2", children: [_jsx(FaEdit, { className: "cursor-pointer text-gray-600 hover:text-blue-500", onClick: () => openEditModal(index) }), _jsx(FaTrashAlt, { className: "cursor-pointer text-gray-600 hover:text-red-500", onClick: () => openDeleteModal(index) })] })] }, index))) })] }), isModalOpen && (_jsx("div", { className: "fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg w-1/3 p-6", children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: editIndex !== null ? 'Savolni tahrirlash' : 'Savol qo\'shish' }), _jsx("input", { type: "text", name: "question", placeholder: "Savolni kiriting", value: formData.question, onChange: handleInputChange, className: "border w-full p-2 mb-3 rounded" }), _jsxs("select", { name: "category", value: formData.category, onChange: handleInputChange, className: "border w-full p-2 mb-3 rounded", children: [_jsx("option", { value: "", children: "Kategoriyani tanlang" }), _jsx("option", { value: "Matematika", children: "Matematika" }), _jsx("option", { value: "Ingliz tili", children: "Ingliz tili" }), _jsx("option", { value: "Fizika", children: "Fizika" })] }), _jsxs("select", { name: "difficulty", value: formData.difficulty, onChange: handleInputChange, className: "border w-full p-2 mb-3 rounded", children: [_jsx("option", { value: "", children: "Qiyinchilik darajasini tanlang" }), _jsx("option", { value: "Oson", children: "Oson" }), _jsx("option", { value: "O'rta", children: "O'rta" }), _jsx("option", { value: "Qiyin", children: "Qiyin" })] }), _jsxs("select", { name: "type", value: formData.type, onChange: handleInputChange, className: "border w-full p-2 mb-3 rounded", children: [_jsx("option", { value: "", children: "Turlarni tanlang" }), _jsx("option", { value: "Yopiq", children: "Yopiq" }), _jsx("option", { value: "Ochiq", children: "Ochiq" })] }), _jsx("input", { type: "file", onChange: handleFileChange, className: "border w-full p-2 mb-3 rounded" }), formData.options.map((option, index) => (_jsxs("div", { className: "flex items-center mb-2", children: [_jsx("input", { type: "checkbox", checked: option.isCorrect, onChange: (e) => handleOptionChange(index, 'isCorrect', e.target.checked), className: "mr-2" }), _jsx("input", { type: "text", placeholder: `Option ${index + 1}`, value: option.text, onChange: (e) => handleOptionChange(index, 'text', e.target.value), className: "border w-full p-2 mr-2 rounded" }), _jsx("button", { onClick: addOption, className: "bg-blue-500 text-white w-20 h-10 px-2 py-1 rounded", children: _jsx(FaPlus, {}) })] }, index))), _jsxs("div", { className: "flex justify-end space-x-2 mt-3", children: [_jsx("button", { onClick: closeModal, className: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600", children: "Cancel" }), _jsx("button", { onClick: saveData, className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600", children: "OK" })] })] }) })), isDeleteModalOpen && (_jsx("div", { className: "fixed inset-0 bg-gray-800 bg-opacity-85 flex items-center justify-center", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-1/3", children: [_jsxs("div", { className: "flex items-center mb-32", children: [_jsx("img", { src: deleteIcon, alt: "Delete Icon", className: "w-28 -translate-y-1 translate-x-60" }), _jsx("p", { className: "text-lg text-center translate-y-20 translate-x-7 text-4xl\t", children: "Siz ushbu savolni o\u2018chirishni xohlaysizmi?" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("button", { onClick: deleteQuestion, className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600", children: "Ha" }), _jsx("button", { onClick: closeDeleteModal, className: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600", children: "Yo\u2018q" })] })] }) })), showImage && (_jsx("div", { className: "fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-1/2", children: [_jsx("img", { src: currentImage ? URL.createObjectURL(currentImage) : '#', alt: "Uploaded", className: "w-full h-auto max-w-full max-h-[600px] object-contain" }), _jsx("button", { onClick: closeImageModal, className: "mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600", children: "Close" })] }) }))] }));
};
export default QuestionTable;
