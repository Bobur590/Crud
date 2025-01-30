import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { BASE_URL } from "@/services/api";
import axiosConfiguration from "@/services/axios";
import { useEffect, useState } from "react";
function Results() {
    const [data, setData] = useState();
    const getResults = async () => {
        try {
            const { data } = await axiosConfiguration.get(`statistic/user-dashboard/?page=0&size=10`);
            setData(data.body.body);
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getResults();
    }, []);
    return (_jsx("div", { className: "w-full flex items-center justify-center flex-wrap gap-5", children: data?.map((item) => (_jsxs(Card, { className: "max-w-md border border-black", children: [_jsxs(CardHeader, { children: [_jsx("img", { className: "w-full h-72 bg-cover bg-center object-cover", src: item.fileId
                                ? `${BASE_URL}/api/videos/files/${item.fileId}`
                                : 'https://www.shutterstock.com/image-vector/vector-line-icon-img-260nw-2050481219.jpg', alt: "" }), _jsx(CardTitle, { className: "text-center text-2xl font-bold text-red-500", children: item.categoryName ? item.categoryName : "Категория" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex justify-between space-y-2 text-gray-500 text-lg", children: [_jsx("p", { children: "\u0422\u045E\u0493\u0440\u0438 \u0436\u0430\u0432\u043E\u0431\u043B\u0430\u0440:" }), _jsxs("p", { children: [item.correctAnswers, "/", item.countAnswers] })] }), _jsxs("div", { className: "flex justify-between space-y-2 text-gray-500 text-lg", children: [_jsx("p", { children: "\u0412\u0430\u049B\u0442 \u0434\u0430\u0432\u043E\u043C\u0438\u0439\u043B\u0438\u0433\u0438:" }), _jsxs("p", { children: [item.durationTime, " (\u0434\u0430\u043A.)"] })] }), _jsxs("div", { className: "flex justify-between space-y-2 text-gray-500 text-lg", children: [_jsx("p", { children: "\u0422\u045E\u043F\u043B\u0430\u043D\u0433\u0430\u043D \u0431\u0430\u043B\u043B:" }), _jsx("p", { children: item.testScore })] }), _jsxs("div", { className: "flex justify-between space-y-2 text-gray-500 text-lg", children: [_jsx("p", { children: "\u0422\u0435\u0441\u0442 \u0442\u043E\u043F\u0448\u0438\u0440\u0438\u043B\u0433\u0430\u043D \u0441\u0430\u043D\u0430:" }), _jsx("p", { children: item.createdAt })] })] }), _jsxs(CardFooter, { className: "flex flex-col gap-y-3", children: [_jsx("h4", { className: "text-center text-xl font-bold text-red-500", children: "\u041A\u0443\u0448\u0438\u043C\u0447\u0430 \u0439\u0443\u043D\u0430\u043B\u0438\u0448\u043F\u0430\u0440\u0434\u0430\u043D \u0438\u0448\u043B\u0430\u043D\u0433\u0430\u043D\u043B\u0430\u0440" }), _jsx(Button, { className: "w-full py-5 bg-orange-500 hover:bg-orange-700", children: "\u041A\u0443\u0442\u0438\u043B\u043C\u043E\u043A\u0434\u0430" })] })] }))) }));
}
export default Results;
