import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Modal from "../../components/modal";
import Input from "../../components/input";
import { PiPlusCircleLight } from "react-icons/pi";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
const Categories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editCategory, setEditCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        questionCount: 0,
        extraQuestionCount: 0,
        durationTime: 0,
        retakeDate: 0,
        fileId: 0,
        main: false,
    });
    const validateForm = () => {
        if (!formData.name.trim()) {
            alert("Категория номи киритилиши шарт!");
            return false;
        }
        if (!formData.description.trim()) {
            alert("Тавсиф киритилиши шарт!");
            return false;
        }
        if (formData.questionCount <= 0) {
            alert("Саволлар сони 0 дан катта бўлиши шарт!");
            return false;
        }
        if (formData.durationTime <= 0) {
            alert("Давомийлик вақти 0 дан катта бўлиши шарт!");
            return false;
        }
        return true;
    };
    useEffect(() => {
        fetchCategories();
    }, []);
    const fetchCategories = () => {
        setLoading(true);
        const token = localStorage.getItem("token");
        axios
            .get("http://142.93.106.195:9090/category/list", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
            if (response.data && response.data.success) {
                setCategories(response.data.body || []);
            }
            else {
                setCategories([]);
            }
        })
            .catch((error) => {
            console.error("Error fetching categories: ", error);
            setCategories([]);
        })
            .finally(() => {
            setLoading(false);
        });
    };
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleEdit = (category) => {
        setEditCategory(category);
        setFormData({
            name: category.name,
            description: category.description,
            questionCount: category.questionCount,
            extraQuestionCount: category.extraQuestionCount,
            durationTime: category.durationTime,
            retakeDate: category.retakeDate,
            fileId: category.fileId || 0,
            main: category.main,
        });
        setIsModalOpen(true);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        const token = localStorage.getItem("token");
        if (editCategory) {
            try {
                const response = await axios.put(`http://142.93.106.195:9090/category/${editCategory.id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (response.data && response.data.success) {
                    alert("Category updated successfully!");
                    fetchCategories();
                    handleCloseModal();
                }
                else {
                    alert("Failed to update category.");
                }
            }
            catch (error) {
                console.error("Error updating category: ", error);
                alert("Error updating category.");
            }
        }
        else {
            try {
                const response = await axios.post("http://142.93.106.195:9090/category", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (response.data && response.data.success) {
                    alert("Category created successfully!");
                    fetchCategories();
                    handleCloseModal();
                }
                else {
                    alert("Failed to create category.");
                }
            }
            catch (error) {
                console.error("Error creating category: ", error);
                alert("Error creating category.");
            }
        }
    };
    const handleCloseModal = () => {
        setFormData({
            name: "",
            description: "",
            questionCount: 0,
            extraQuestionCount: 0,
            durationTime: 0,
            retakeDate: 0,
            fileId: 0,
            main: false,
        });
        setEditCategory(null);
        setIsModalOpen(false);
    };
    const handleDelete = (categoryId) => {
        const token = localStorage.getItem("token");
        axios
            .delete(`http://142.93.106.195:9090/category/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
            if (response.data && response.data.success) {
                alert("Category deleted successfully!");
                fetchCategories();
            }
            else {
                alert("Failed to delete category.");
            }
        })
            .catch((error) => {
            console.error("Error deleting category: ", error);
            alert("Error deleting category.");
        });
    };
    return (_jsxs("div", { className: "max-w-full md:max-w-6xl mx-auto", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-4", children: [_jsx("h1", { className: "text-2xl md:text-3xl font-bold text-gray-800", children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" }), _jsxs("div", { className: "text-sm text-gray-500 mt-2 md:mt-0", children: [_jsx("span", { className: "font-medium text-gray-700", children: _jsx(Link, { to: "/dashboard", children: "\u0411\u043E\u0448\u049B\u0430\u0440\u0443\u0432 \u043F\u0430\u043D\u0435\u043B\u0438" }) }), " ", "/ ", _jsx("span", { className: "text-blue-600 font-medium", children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })] })] }), _jsx("div", { className: "flex justify-between items-center mb-4", children: _jsxs(Button, { onClick: () => setIsModalOpen(true), variant: "secondary", size: "medium", style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        textTransform: "none",
                    }, children: [_jsx("span", { className: "icon text-2xl", children: _jsx(PiPlusCircleLight, {}) }), _jsx("span", { children: "\u041A\u0443\u0448\u0438\u0448" })] }) }), loading ? (_jsx("div", { className: "flex justify-center items-center py-10", children: _jsx("div", { className: "spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid border-gray-600 rounded-full" }) })) : (_jsx("div", { className: "overflow-x-auto max-h-[400px]", children: _jsxs("table", { className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400", children: [_jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3", children: "ID" }), _jsx("th", { className: "px-6 py-3", children: "T/P" }), _jsx("th", { className: "px-6 py-3", children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043D\u043E\u043C\u0438" }), _jsx("th", { className: "px-6 py-3", children: "\u0422\u0430\u0432\u0441\u0438\u0444" }), _jsx("th", { className: "px-6 py-3", children: "\u0421\u0430\u0432\u043E\u043B\u043B\u0430\u0440 \u0441\u043E\u043D\u0438" }), _jsx("th", { className: "px-6 py-3", children: "\u049A\u045E\u0448\u0438\u043C\u0447\u0430 \u0441\u0430\u0432\u043E\u043B\u043B\u0430\u0440" }), _jsx("th", { className: "px-6 py-3", children: "\u0414\u0430\u0432\u043E\u043C\u0438\u0439\u043B\u0438\u043A (\u0434\u0430\u049B\u0438\u049B\u0430)" }), _jsx("th", { className: "px-6 py-3", children: "\u049A\u0430\u0439\u0442\u0430 \u049B\u0430\u0431\u0443\u043B \u049B\u0438\u043B\u0438\u0448" }), _jsx("th", { className: "px-6 py-3", children: "\u042F\u0440\u0430\u0442\u0433\u0430\u043D" }), _jsx("th", { className: "px-6 py-3", children: "\u0410\u0441\u043E\u0441\u0438\u0439" }), _jsx("th", { className: "px-6 py-3", children: "\u04B2\u0430\u0440\u0430\u043A\u0430\u0442" })] }) }), _jsx("tbody", { children: categories.map((category) => (_jsxs("tr", { className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700", children: [_jsx("td", { className: "px-6 py-4", children: category.id }), _jsx("td", { className: "px-6 py-4", children: category.name }), _jsx("td", { className: "px-6 py-4", children: category.description }), _jsx("td", { className: "px-6 py-4", children: category.questionCount }), _jsx("td", { className: "px-6 py-4", children: category.extraQuestionCount }), _jsx("td", { className: "px-6 py-4", children: category.durationTime }), _jsx("td", { className: "px-6 py-4", children: category.retakeDate }), _jsx("td", { className: "px-6 py-4", children: category.createdBy }), _jsx("td", { className: "px-6 py-4", children: category.fileId }), _jsx("td", { className: "px-6 py-4", children: category.main ? "Ҳа" : "Йўқ" }), _jsxs("td", { className: "px-6 py-7 flex gap-2", children: [_jsx(Button, { variant: "secondary", onClick: () => handleEdit(category), style: {
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    padding: 0,
                                                    color: "inherit",
                                                }, children: _jsx(FaEdit, {}) }), _jsx(Button, { variant: "danger", onClick: () => handleDelete(category.id), style: {
                                                    backgroundColor: "transparent", // Remove the background
                                                    border: "none", // Remove any border
                                                    padding: 0, // Remove padding to fit the icon
                                                    color: "inherit", // Icon color will inherit from parent
                                                }, children: _jsx(FaTrashAlt, {}) })] })] }, category.id))) })] }) })), _jsx(Modal, { isOpen: isModalOpen, onClose: handleCloseModal, title: editCategory ? "Категорияни Таҳрирлаш" : "Категория Қўшиш", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsx(Input, { label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043D\u043E\u043C\u0438", type: "text", name: "name", value: formData.name, onChange: handleInputChange, placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043D\u043E\u043C\u0438\u043D\u0438 \u043A\u0438\u0440\u0438\u0442\u0438\u043D\u0433" }), _jsx(Input, { label: "\u0422\u0430\u0432\u0441\u0438\u0444", type: "text", name: "description", value: formData.description, onChange: handleInputChange, placeholder: "\u0422\u0430\u0432\u0441\u0438\u0444 \u043A\u0438\u0440\u0438\u0442\u0438\u043D\u0433" }), _jsx(Input, { label: "\u0421\u0430\u0432\u043E\u043B\u043B\u0430\u0440 \u0441\u043E\u043D\u0438", type: "number", name: "questionCount", value: formData.questionCount, onChange: handleInputChange, placeholder: "\u0421\u0430\u0432\u043E\u043B\u043B\u0430\u0440 \u0441\u043E\u043D\u0438\u043D\u0438 \u043A\u0438\u0440\u0438\u0442\u0438\u043D\u0433" }), _jsx(Input, { label: "\u049A\u045E\u0448\u0438\u043C\u0447\u0430 \u0441\u0430\u0432\u043E\u043B\u043B\u0430\u0440 \u0441\u043E\u043D\u0438", type: "number", name: "extraQuestionCount", value: formData.extraQuestionCount, onChange: handleInputChange, placeholder: "\u049A\u045E\u0448\u0438\u043C\u0447\u0430 \u0441\u0430\u0432\u043E\u043B\u043B\u0430\u0440 \u0441\u043E\u043D\u0438\u043D\u0438 \u043A\u0438\u0440\u0438\u0442\u0438\u043D\u0433" }), _jsx(Input, { label: "\u0414\u0430\u0432\u043E\u043C\u0438\u0439\u043B\u0438\u043A \u0432\u0430\u049B\u0442\u0438 (\u0434\u0430\u049B\u0438\u049B\u0430)", type: "number", name: "durationTime", value: formData.durationTime, onChange: handleInputChange, placeholder: "\u0414\u0430\u0432\u043E\u043C\u0438\u0439\u043B\u0438\u043A \u0432\u0430\u049B\u0442\u0438\u043D\u0438 \u043A\u0438\u0440\u0438\u0442\u0438\u043D\u0433" }), _jsx(Input, { label: "\u049A\u0430\u0439\u0442\u0430 \u049B\u0430\u0431\u0443\u043B \u049B\u0438\u043B\u0438\u0448", type: "number", name: "retakeDate", value: formData.retakeDate, onChange: handleInputChange, placeholder: "\u049A\u0430\u0439\u0442\u0430 \u049B\u0430\u0431\u0443\u043B \u049B\u0438\u043B\u0438\u0448\u043D\u0438 \u043A\u0438\u0440\u0438\u0442\u0438\u043D\u0433" }), _jsxs("div", { className: "flex gap-4 justify-end mt-4", children: [_jsx(Button, { variant: "secondary", type: "submit", children: editCategory ? "Сақлаш" : "Қўшиш" }), _jsx(Button, { variant: "secondary", onClick: handleCloseModal, children: "\u0401\u043F\u0438\u0448" })] })] }) })] }));
};
export default Categories;
