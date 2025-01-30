import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSendCode = async () => {
        if (!email) {
            toast.error("Iltimos, emailni kiriting.");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.put("http://142.93.106.195:9090/auth/forgot-password", { email });
            if (response.status === 200) {
                toast.success("Kod yuborildi, iltimos emailni tekshirib ko'ring.");
                navigate(`/reset-password?email=${email}`);
            }
        }
        catch (error) {
            toast.error("Email manzilingiz bilan hisob topilmadi.");
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs(Box, { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "#f9f9f9", children: [_jsxs(Box, { p: 4, width: 400, bgcolor: "white", borderRadius: 4, boxShadow: 3, display: "flex", flexDirection: "column", gap: 3, children: [_jsx(Typography, { variant: "h4", align: "center", fontWeight: "bold", gutterBottom: true, children: "Forgot Password" }), _jsx(TextField, { label: "Email", variant: "outlined", type: "email", fullWidth: true, value: email, onChange: (e) => setEmail(e.target.value), sx: { marginBottom: 2 } }), _jsx(Button, { variant: "contained", color: "primary", size: "large", onClick: handleSendCode, fullWidth: true, sx: {
                            borderRadius: "12px",
                            padding: "10px 0",
                            backgroundColor: "#5213e7",
                            "&:hover": {
                                backgroundColor: "#3701b1",
                            },
                            fontSize: '16px',
                        }, disabled: isLoading, children: isLoading ? "Sending..." : "Send Code" })] }), _jsx(ToastContainer, {})] }));
}
export default ForgotPassword;
