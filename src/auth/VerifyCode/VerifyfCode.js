import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function VerifyCode() {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const handleInputChange = (e) => {
        setCode(e.target.value);
        setError("");
    };
    const handleVerifyCode = async () => {
        if (code.length !== 5) {
            setError("Please enter the 5-digit verification code.");
            return;
        }
        try {
            const response = await axios.put(`http://142.93.106.195:9090/auth/activate?code=${code}`, "");
            if (response.data.success) {
                toast.success("Code verified successfully!");
                window.location.href = `/reset-password?token=${response.data.token}`;
            }
            else {
                toast.error("Invalid verification code. Please try again.");
            }
        }
        catch (error) {
            toast.error("Error verifying code. Please try again later.");
            console.error("Verification error:", error);
        }
    };
    return (_jsxs(Box, { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "#f9f9f9", children: [_jsxs(Box, { p: 4, width: 400, bgcolor: "white", borderRadius: 4, boxShadow: 3, display: "flex", flexDirection: "column", gap: 3, children: [_jsx(Typography, { variant: "h5", align: "center", fontWeight: "bold", gutterBottom: true, children: "Enter Verification Code" }), _jsx(Typography, { variant: "body2", align: "center", color: "textSecondary", children: "Please enter the 5-digit verification code sent to your email." }), _jsx(TextField, { label: "Verification Code", variant: "outlined", type: "text", value: code, onChange: handleInputChange, error: !!error, helperText: error, fullWidth: true }), _jsx(Button, { variant: "contained", color: "primary", size: "large", onClick: handleVerifyCode, fullWidth: true, sx: {
                            borderRadius: "12px",
                            padding: "10px 0",
                            backgroundColor: "#007bff",
                            "&:hover": {
                                backgroundColor: "#0056b3",
                            },
                        }, children: "Verify Code" })] }), _jsx(ToastContainer, {})] }));
}
export default VerifyCode;
