import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://142.93.106.195:9090";
const UserResults = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); // Qidiruv inputi
    const [category, setCategory] = useState(""); // Kategoriyani tanlash
    const [status, setStatus] = useState(""); // Statusni tanlash
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    // Fetch all users
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const params = {
                firstName: searchTerm,
                lastName: searchTerm,
                category,
                status
            };
            const response = await axios.get(`${BASE_URL}/user-controller`, { params });
            setUsers(response.data);
        }
        catch (error) {
            console.error("Failed to fetch users:", error);
            setToastMessage("Ma'lumotlarni yuklashda xatolik.");
            setShowToast(true); // Toastni ko'rsatish
        }
        finally {
            setLoading(false);
        }
    };
    // Load users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);
    // Handle user update
    const handleUpdate = (user) => {
        const updatedData = {
            ...user,
            firstName: prompt("Yangi Ism:", user.firstName) || user.firstName,
            lastName: prompt("Yangi Familya:", user.lastName) || user.lastName,
            phoneNumber: prompt("Yangi Telefon:", user.phoneNumber) || user.phoneNumber,
            dateOfBirth: prompt("Yangi Tug'ilgan sana (yyyy-mm-dd):", user.dateOfBirth) || user.dateOfBirth,
            street: prompt("Yangi Manzil:", user.street) || user.street,
        };
        updateUser(user.id, updatedData);
    };
    // Update a user
    const updateUser = async (userId, updatedData) => {
        try {
            await axios.put(`${BASE_URL}/user-controller/${userId}`, updatedData);
            setToastMessage("Foydalanuvchi muvaffaqiyatli yangilandi.");
            setShowToast(true); // Toastni ko'rsatish
            fetchUsers(); // Yangilangan foydalanuvchilarni qayta yuklash
        }
        catch (error) {
            console.error("Failed to update user:", error);
            setToastMessage("Foydalanuvchini yangilashda xatolik yuz berdi.");
            setShowToast(true); // Toastni ko'rsatish
        }
    };
    return (_jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif" }, children: [_jsx("h1", { className: "text-start mb-20 text-4xl", children: "Foydalanuvchilar natijasi" }), _jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "20px" }, children: [_jsx("input", { type: "text", placeholder: "\uD83D\uDD0DIsm yoki familya bo'yicha qidirish", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), style: {
                            flex: "1",
                            padding: "10px",
                            marginRight: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        } }), _jsxs("select", { value: category, onChange: (e) => setCategory(e.target.value), style: {
                            flex: "1",
                            padding: "10px",
                            marginRight: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }, children: [_jsx("option", { value: "", children: "Kategoriyani tanlang" }), _jsx("option", { value: "category1", children: "Category 1" }), _jsx("option", { value: "category2", children: "Category 2" })] }), _jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), style: {
                            flex: "1",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }, children: [_jsx("option", { value: "", children: "Statusni tanlang" }), _jsx("option", { value: "pending", children: "Kutilmoqda" }), _jsx("option", { value: "verified", children: "Tekshirilganlar" }), _jsx("option", { value: "canceled", children: "Bekor qilinganlar" })] }), _jsx("button", { style: {
                            padding: "10px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            marginLeft: "10px",
                        }, onClick: fetchUsers, children: "Qidirish" })] }), _jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [_jsx("thead", { children: _jsxs("tr", { style: { backgroundColor: "#f4f4f4", textAlign: "left" }, children: [_jsx("th", { style: { padding: "10px", border: "1px solid #ddd" }, children: "T/P" }), _jsx("th", { style: { padding: "10px", border: "1px solid #ddd" }, children: "Tuliq Ismi" }), _jsx("th", { style: { padding: "10px", border: "1px solid #ddd" }, children: "Telefon" }), _jsx("th", { style: { padding: "10px", border: "1px solid #ddd" }, children: "Tug'ilgan sana" }), _jsx("th", { style: { padding: "10px", border: "1px solid #ddd" }, children: "Manzil" }), _jsx("th", { style: { padding: "10px", border: "1px solid #ddd" }, children: "Xarakat" })] }) }), _jsx("tbody", { children: loading ? (_jsx("tr", { children: _jsx("td", { style: { padding: "10px", border: "1px solid #ddd" }, colSpan: 6, children: "Yuklanmoqda..." }) })) : users.length > 0 ? (users.map((user, index) => (_jsxs("tr", { children: [_jsx("td", { style: { padding: "10px", border: "1px solid #ddd" }, children: index + 1 }), _jsxs("td", { style: { padding: "10px", border: "1px solid #ddd" }, children: [user.firstName, " ", user.lastName] }), _jsx("td", { style: { padding: "10px", border: "1px solid #ddd" }, children: user.phoneNumber }), _jsx("td", { style: { padding: "10px", border: "1px solid #ddd" }, children: user.dateOfBirth }), _jsx("td", { style: { padding: "10px", border: "1px solid #ddd" }, children: user.street }), _jsx("td", { style: { padding: "10px", border: "1px solid #ddd" }, children: _jsx("button", { style: {
                                            padding: "5px 10px",
                                            backgroundColor: "#007bff",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "4px",
                                        }, onClick: () => handleUpdate(user), children: "Tahrirlash" }) })] }, user.id)))) : (_jsx("tr", { children: _jsx("td", { style: { padding: "10px", border: "1px solid #ddd" }, colSpan: 6, children: "Ma'lumot mavjud emas" }) })) })] }), showToast && (_jsxs("div", { id: "toast-danger", className: "flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", role: "alert", style: {
                    position: "fixed",
                    top: "20px", // Toastni yuqoriga joylashtirish
                    left: "50%",
                    transform: "translateX(-50%)", // Markazlash uchun
                    zIndex: 9999, // Toastni yuqorida ko‘rsatish uchun
                }, children: [_jsxs("div", { className: "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200", children: [_jsx("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" }) }), _jsx("span", { className: "sr-only", children: "Error icon" })] }), _jsx("div", { className: "ms-3 text-sm font-normal", children: toastMessage }), _jsxs("button", { type: "button", onClick: () => setShowToast(false), className: "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700", children: [_jsx("span", { className: "sr-only", children: "Close" }), _jsx("svg", { className: "w-3 h-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" }) })] })] }))] }));
};
export default UserResults;
