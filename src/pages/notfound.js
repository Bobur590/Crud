import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (_jsx("section", { className: "page_404 py-10 bg-white font-serif", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "text-center w-full max-w-4xl", children: [_jsx("div", { className: "four_zero_four_bg bg-center bg-cover h-[250px] sm:h-[400px] md:h-[650px]", style: {
                                backgroundImage: 'url(https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif)',
                            } }), _jsxs("div", { className: "contant_box_404 mt-[-30px] sm:mt-[-50px]", children: [_jsx("h3", { className: "h2 text-3xl sm:text-4xl md:text-5xl", children: "Look like you're lost" }), _jsx("p", { className: "text-sm sm:text-base md:text-lg", children: "The page you are looking for is not available!" }), _jsx(Link, { to: '/', className: "link_404  text-white py-2 px-5 bg-[#39ac31] inline-block mt-5 rounded-md transition-colors hover:bg-[#319a2b]", children: "Go to Home" })] })] }) }) }) }));
};
export default NotFound;
