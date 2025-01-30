import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import Button from "../../components/Button";
import Modal from "../../components/modal";
import Input from "../../components/input";
import axiosConfiguration from "@/services/axios";
const Employees = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [employeesId, setEmployeesId] = useState("");
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        role: "",
    });
    // Xodimlar ro'yxatini olish funksiyasi
    const getEmployees = async () => {
        try {
            const { data } = await axiosConfiguration.get("http://142.93.106.195:9090/user/get/admin/list");
            const formattedData = [];
            for (let i = 0; i < data.body.body.length; i++) {
                const emp = data.body.body[i];
                formattedData.push({
                    ...emp,
                    phoneNumber: emp.phoneNumber,
                    isActive: emp.isActive ?? false,
                    order: i + 1, // Tartib raqam
                });
            }
            setEmployees(formattedData);
        }
        catch (error) {
            console.error("Xodimlarni olishda xato yuz berdi:", error);
            alert("Xodimlarni olishda xato yuz berdi. Iltimos, qayta urinib ko'ring.");
        }
    };
    useEffect(() => {
        getEmployees();
    }, []);
    // Formdagi ma'lumotlarni boshqarish
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // Form yuborilganda
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Parollar bir-biriga mos emas!");
            return;
        }
        try {
            const newEmployee = {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                role: formData.role,
            };
            const response = await axiosConfiguration.post("/auth/save/admin", newEmployee);
            if (response.status === 200 || response.status === 201) {
                const addedEmployee = response.data;
                setEmployees((prevEmployees) => [
                    ...prevEmployees,
                    {
                        ...addedEmployee,
                        isActive: false,
                        order: prevEmployees.length + 1,
                    },
                ]);
                alert("Xodim muvaffaqiyatli qo'shildi!");
            }
            else {
                alert("Xodimni qo'shishda xatolik yuz berdi.");
            }
            setIsModalOpen(false);
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phoneNumber: "",
                role: "",
                password: "",
                confirmPassword: "",
            });
        }
        catch (error) {
            console.error("Xodimni qo'shishda xatolik:", error);
            const errorMessage = error.response?.data?.message;
            alert(errorMessage);
        }
    };
    const toggleActive = async (id) => {
        try {
            const employee = employees.find((emp) => emp.id === id);
            if (!employee)
                throw new Error("Xodim topilmadi!");
            // Faollik holatini teskari qilish
            const updatedEmployee = { ...employee, isActive: !employee.isActive };
            // URLni to'g'ri formatda yuborish
            const response = await axiosConfiguration.put(`http://142.93.106.195:9090/user/active/${employeesId}`, updatedEmployee);
            if (response.status === 200) {
                setEmployees((prevEmployees) => prevEmployees.map((emp) => emp.id === id ? { ...emp, isActive: !emp.isActive } : emp));
                console.log("Faollik holati muvaffaqiyatli o'zgartirildi!");
            }
            else {
                console.log("Faollik holatini o'zgartirishda xatolik yuz berdi.");
            }
        }
        catch (err) {
            console.error("Faollik holatini o'zgartirishda xato:", err);
        }
    };
    // Jadval ustunlari
    const tableColumns = [
        { key: "order", title: "T/P" },
        { key: "firstName", title: "исм" },
        { key: "lastName", title: "фамилия" },
        { key: "email", title: "элэктрон почта" },
        { key: "role", title: "лавозим" },
        {
            key: "isActive",
            title: "Faolligi",
            render: (row) => (_jsx(Button, { size: "small", onClick: () => {
                    toggleActive(row.id);
                    setEmployeesId(row.id.toString());
                }, children: row.isActive ? "Faol" : "Nofaol" })),
        },
    ];
    return (_jsxs("div", { className: "p-4 bg-white shadow rounded", children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: "Xodimlar" }), _jsx(Button, { variant: "primary", className: "my-3", onClick: () => {
                    setIsModalOpen(true);
                    setFormData({
                        firstname: "",
                        lastname: "",
                        email: "",
                        phoneNumber: "",
                        role: "",
                        password: "",
                        confirmPassword: "",
                    });
                }, children: "\u043A\u045E\u0448\u0438\u0448" }), _jsx(Table, { data: employees, columns: tableColumns }), _jsx(Modal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), title: "Yangi Xodim", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "Admin toifasini tanlang" }), _jsxs("select", { name: "role", className: "w-full border border-gray-300 rounded p-2", onChange: handleChange, value: formData.role, children: [_jsx("option", { value: "", disabled: true, children: "Toifani tanlang" }), _jsx("option", { value: "ROLE_TESTER", children: "Tester Admin" }), _jsx("option", { value: "ROLE_ADMIN", children: "Tekshiruvchi Admin" })] })] }), _jsx(Input, { label: "Ism", type: "text", name: "firstname", value: formData.firstname, onChange: handleChange, placeholder: "Ismni kiriting" }), _jsx(Input, { label: "Familiya", type: "text", name: "lastname", value: formData.lastname, onChange: handleChange, placeholder: "Familiyani kiriting" }), _jsx(Input, { label: "Telefon raqam", type: "tel", name: "phoneNumber", value: formData.phoneNumber, onChange: handleChange, placeholder: "Telefon raqamni kiriting" }), _jsx(Input, { label: "Elektron pochta", type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "Elektron pochtani kiriting" }), _jsx(Input, { label: "Parol", type: "password", name: "password", value: formData.password, onChange: handleChange, placeholder: "Parolni kiriting" }), _jsx(Input, { label: "Parolni takrorlang", type: "password", name: "confirmPassword", onChange: handleChange, value: formData.confirmPassword, placeholder: "Takroriy parolni kiriting" }), _jsx("div", { className: "mt-4 flex justify-end", children: _jsx(Button, { type: "submit", variant: "primary", children: "Saqlash" }) })] }) })] }));
};
export default Employees;
