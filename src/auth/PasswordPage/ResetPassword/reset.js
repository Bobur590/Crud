import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../components/Button";
function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setEmail(queryParams.get("email") || "");
        setVerificationCode(queryParams.get("code") || "");
    }, [location]);
    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error("Parollar mos kelmaydi.");
            return;
        }
        if (!newPassword || !confirmPassword || !verificationCode) {
            toast.error("Iltimos, barcha maydonlarni to'ldiring.");
            return;
        }
        setIsLoading(true);
        const verificationCodeAsNumber = Number(verificationCode);
        if (isNaN(verificationCodeAsNumber)) {
            toast.error("Iltimos, to'g'ri tasdiqlash kodini kiriting.");
            setIsLoading(false);
            return;
        }
        try {
            const response = await axios.put("http://142.93.106.195:9090/auth/reset-password", {
                passwordToken: verificationCodeAsNumber,
                newPassword,
                confirmPassword,
            });
            console.log(verificationCodeAsNumber);
            if (response.status === 200) {
                toast.success("Parol muvaffaqiyatli yangilandi.");
                navigate("/login", { state: { resetSuccess: true } });
            }
        }
        catch (error) {
            console.error("Xatolik:", error);
            toast.error("Tizimda xatolik yuz berdi.");
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs(Box, { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "#f9f9f9", children: [_jsxs(Box, { p: 4, width: 400, bgcolor: "white", borderRadius: 4, boxShadow: 3, display: "flex", flexDirection: "column", gap: 3, children: [_jsx(Typography, { variant: "h4", align: "center", fontWeight: "bold", gutterBottom: true, children: "Reset Password" }), _jsx(TextField, { label: "Verification Code", variant: "outlined", type: "text", fullWidth: true, value: verificationCode, onChange: (e) => setVerificationCode(e.target.value), sx: { marginBottom: 2 } }), _jsx(TextField, { label: "New Password", variant: "outlined", type: "password", fullWidth: true, value: newPassword, onChange: (e) => setNewPassword(e.target.value), sx: { marginBottom: 2 } }), _jsx(TextField, { label: "Confirm Password", variant: "outlined", type: "password", fullWidth: true, value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), sx: { marginBottom: 2 } }), _jsx(Button, { variant: "primary", size: "large", onClick: handleResetPassword, disabled: isLoading, children: isLoading ? "Resetting..." : "Reset Password" })] }), _jsx(ToastContainer, {})] }));
}
export default ResetPassword;
