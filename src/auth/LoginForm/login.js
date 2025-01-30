import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [resData, setResData] = useState(null); // API response
    const handleRegisterNavigation = () => {
        navigate("/register");
    };
    const handleSubmit = async () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setEmailError("Iltimos, to'g'ri email kiriting.");
            return;
        }
        else {
            setEmailError("");
        }
        if (password.length < 6 || password.length > 16) {
            setError("Parol uzunligi 6-16 belgidan iborat bo'lishi kerak.");
            return;
        }
        else {
            setError("");
        }
        setIsLoading(true);
        try {
            const response = await axios.post("http://142.93.106.195:9090/auth/login", { email, password });
            if (response.data && response.data.token && response.data.role) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                toast.success("Muvaffaqiyatli tizimga kirdingiz!", {
                    position: "top-center",
                    autoClose: 2000,
                });
                setResData(response.data);
                navigate(`/Header`); // Redirect to a dashboard or relevant page
            }
            else {
                setError("Email yoki parol noto'g'ri.");
            }
        }
        catch (error) {
            console.error(error);
            setError("Xatolik yuz berdi. Qayta urinib ko'ring.");
        }
        finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role) {
            // Handle role-based navigation
            if (role === "ROLE_SUPER_ADMIN")
                navigate("/result");
            else if (role === "ROLE_TESTER")
                navigate("/tester-dashboard");
            else if (role === "ROLE_ADMIN")
                navigate("/admin-dashboard");
            else
                navigate("/result");
        }
    }, []);
    const isLoginButtonDisabled = !(email && password) || !!error || !!emailError || isLoading;
    return (_jsx("div", { className: "flex justify-center items-center h-screen bg-gray-100", children: _jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg w-full max-w-sm animate__animated animate__fadeIn", children: [_jsx("h2", { className: "text-2xl font-semibold text-center mb-6 text-gray-800", children: "Tizimga kirish" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Elektron pochtangizni kiriting", className: "w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }), emailError && _jsx("p", { className: "text-red-500 text-sm", children: emailError }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Parolni kiriting", className: "w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }), error && _jsx("p", { className: "text-red-500 text-sm", children: error }), _jsx("button", { onClick: handleSubmit, disabled: isLoginButtonDisabled, className: `w-full p-3 text-white rounded-md ${isLoginButtonDisabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition`, children: isLoading ? "Kirish..." : "Tizimga kirish" }), _jsx("p", { className: "mt-4 text-center", children: _jsx("a", { href: "#", onClick: handleRegisterNavigation, className: "text-blue-500 hover:text-blue-700", children: "Ro'yxatdan o'tish" }) }), _jsx(ToastContainer, {})] }) }));
}
export default Login;
