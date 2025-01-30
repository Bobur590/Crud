import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button, Box, Typography, FormControlLabel, Checkbox, Modal, Paper, IconButton, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Input from "@/components/input";
function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        role: "ROLE_USER",
    });
    const [gender, setGender] = useState("");
    const [allowAll, setAllowAll] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [genderError, setGenderError] = useState("");
    const handleChange = (label, value) => {
        setValues((prev) => ({ ...prev, [label]: value }));
    };
    const handleGenderChange = (value) => {
        setGender(value);
        setGenderError(""); // Clear error on selection
    };
    const handleAllowAllChange = (event) => {
        setAllowAll(event.target.checked);
        if (event.target.checked) {
            setOpenModal(true);
        }
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const validateForm = () => {
        let isValid = true;
        // Email validation
        const trimmedEmail = values.email.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!trimmedEmail) {
            setEmailError("Email is required.");
            isValid = false;
        }
        else if (!emailRegex.test(trimmedEmail)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        }
        else {
            setEmailError("");
        }
        // Password validation
        if (values.password !== values.confirmPassword) {
            setPasswordError("Passwords do not match.");
            isValid = false;
        }
        else if (values.password.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
            isValid = false;
        }
        else {
            setPasswordError("");
        }
        // Gender validation
        if (!gender) {
            setGenderError("Please select a gender.");
            isValid = false;
        }
        else {
            setGenderError("");
        }
        return isValid;
    };
    const handleSubmit = async () => {
        if (!validateForm())
            return;
        try {
            const response = await axios.post(`http://142.93.106.195:9090/auth/register?genderType=${gender}`, {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                phoneNumber: values.phoneNumber,
                password: values.password,
                confirmPassword: values.confirmPassword,
                role: values.role,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.data.success) {
                toast.success("Registration successful!", { position: "top-center" });
                const { token, role } = response.data;
                if (token && role) {
                    localStorage.setItem("authToken", token);
                    localStorage.setItem("userRole", role);
                }
                navigate("/verfy-code");
            }
        }
        catch (error) {
            if (error.response?.data?.message) {
                toast.error(`Error: ${error.response.data.message}`, { position: "top-center" });
            }
            else {
                toast.error("Network error occurred. Please try again later.", { position: "top-center" });
            }
        }
    };
    const isSubmitButtonDisabled = !(values.email && values.password && values.firstname && values.lastname && gender && allowAll) ||
        !!emailError ||
        !!passwordError ||
        !!genderError;
    return (_jsxs(Grid, { container: true, spacing: 0, justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "white", children: [_jsx(Grid, { item: true, xs: 12, md: 6, display: "flex", justifyContent: "center", alignItems: "center", sx: { height: "100vh", padding: 0 } }), _jsx(Grid, { item: true, xs: 12, md: 6, display: "flex", justifyContent: "center", alignItems: "center", sx: { height: "100vh", padding: 4 }, children: _jsxs(Box, { p: 6, width: 500, bgcolor: "white", borderRadius: 4, display: "flex", flexDirection: "column", gap: 3, children: [_jsx(Typography, { variant: "h4", align: "center", fontWeight: "bold", gutterBottom: true, children: "Register" }), _jsxs(Box, { display: "flex", justifyContent: "center", gap: 3, children: [_jsx(Button, { variant: gender === "MALE" ? "contained" : "outlined", onClick: () => handleGenderChange("MALE"), sx: {
                                        borderRadius: "12px",
                                        padding: "10px 0",
                                        backgroundColor: gender === "MALE" ? "#5213e7" : "transparent",
                                        color: gender === "MALE" ? "white" : "#5213e7",
                                        "&:hover": {
                                            backgroundColor: gender === "MALE" ? "#3701b1" : "#f0f0f0",
                                        },
                                        fontSize: "16px",
                                    }, children: "Male" }), _jsx(Button, { variant: gender === "FEMALE" ? "contained" : "outlined", onClick: () => handleGenderChange("FEMALE"), sx: {
                                        borderRadius: "12px",
                                        padding: "10px 0",
                                        backgroundColor: gender === "FEMALE" ? "#5213e7" : "transparent",
                                        color: gender === "FEMALE" ? "white" : "#5213e7",
                                        "&:hover": {
                                            backgroundColor: gender === "FEMALE" ? "#3701b1" : "#f0f0f0",
                                        },
                                        fontSize: "16px",
                                    }, children: "Female" })] }), _jsx(Input, { label: "First Name", type: "text", value: values.firstname, onChange: (e) => handleChange("firstname", e.target.value) }), _jsx(Input, { label: "Last Name", type: "text", value: values.lastname, onChange: (e) => handleChange("lastname", e.target.value) }), _jsx(Input, { label: "Email", type: "email", value: values.email, onChange: (e) => handleChange("email", e.target.value), error: emailError }), _jsx(Input, { label: "Password", type: "password", value: values.password, onChange: (e) => handleChange("password", e.target.value), error: passwordError }), _jsx(Input, { label: "Confirm Password", type: "password", value: values.confirmPassword, onChange: (e) => handleChange("confirmPassword", e.target.value), error: passwordError }), _jsx(Input, { label: "Phone", type: "tel", value: values.phoneNumber, onChange: (e) => handleChange("phoneNumber", e.target.value) }), _jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: allowAll, onChange: handleAllowAllChange }), label: "I agree to allow all" }), _jsxs(Box, { display: "flex", justifyContent: "space-between", gap: 3, children: [_jsx(Button, { variant: "outlined", color: "primary", size: "large", onClick: () => navigate("/login"), fullWidth: true, sx: {
                                        borderRadius: "12px",
                                        fontSize: "16px",
                                        borderColor: "#5213e7",
                                        color: "#5213e7",
                                        "&:hover": {
                                            backgroundColor: "#f0f0f0",
                                        },
                                    }, children: "Go to Login" }), _jsx(Button, { variant: "contained", color: "primary", size: "large", onClick: handleSubmit, fullWidth: true, disabled: isSubmitButtonDisabled, sx: {
                                        borderRadius: "12px",
                                        fontSize: "16px",
                                        backgroundColor: "#5213e7",
                                        "&:hover": {
                                            backgroundColor: "#3701b1",
                                        },
                                    }, children: "Register" })] })] }) }), _jsx(Modal, { open: openModal, onClose: handleCloseModal, children: _jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", bgcolor: "rgba(0, 0, 0, 0.5)", children: _jsxs(Paper, { sx: { position: "relative", width: 400, p: 4 }, children: [_jsx(Box, { position: "absolute", top: 8, right: 8, children: _jsx(IconButton, { onClick: handleCloseModal, color: "primary", children: _jsx(CloseIcon, {}) }) }), _jsx(Typography, { variant: "h6", gutterBottom: true, children: "Terms and Conditions" }), _jsx(Typography, { variant: "body1", paragraph: true, children: "Lorem ipsum dolor sit amet consectetur adipisicing elit." })] }) }) }), _jsx(ToastContainer, {})] }));
}
export default Register;
