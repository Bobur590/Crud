import { jsx as _jsx } from "react/jsx-runtime";
// import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
const App = () => {
    return (_jsx("div", { className: "bg-gray-100 min-h-screen", children: _jsx(BrowserRouter, { children: _jsx(AppRoutes, {}) }) }));
};
export default App;
