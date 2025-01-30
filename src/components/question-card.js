import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BASE_URL } from '@/services/api';
import { Link } from 'react-router-dom';
export function QuestionCard({ question, onImageClick }) {
    const imageUrl = question.fileId
        ? `${BASE_URL}/api/videos/files/${question.fileId}`
        : 'https://www.shutterstock.com/image-vector/vector-line-icon-img-260nw-2050481219.jpg';
    return (_jsx(Card, { className: 'transition-shadow hover:shadow-lg', children: _jsx(CardContent, { className: 'p-0', children: _jsxs("div", { className: 'flex flex-col md:flex-row', children: [_jsx(Button, { className: 'bg-transparent hover:bg-transparent p-0 m-0 w-full h-48 md:h-auto md:w-72 relative overflow-hidden', onClick: () => question.fileId && onImageClick(question.fileId), children: _jsx("img", { src: imageUrl, alt: question.name, className: 'object-cover', sizes: '(max-width: 768px) 100vw, 288px' }) }), _jsxs("div", { className: 'flex flex-col md:flex-row justify-between w-full p-4 md:p-6 space-y-4 md:space-y-0', children: [_jsxs("div", { className: 'space-y-2', children: [_jsx(InfoRow, { label: '\u0419\u045E\u043D\u0430\u043B\u0438\u0448', value: question.name }), _jsx(InfoRow, { label: '\u0422\u0435\u0441\u0442 \u0438\u0448\u043B\u0430\u0448\u0433\u0430 \u0430\u0436\u0440\u0430\u0442\u0438\u043B\u0433\u0430\u043D \u0432\u0430\u049B\u0442', value: `${question.duration} (дақ)` }), _jsx(InfoRow, { label: '\u0421\u0430\u0432\u043E\u043B\u043B\u0430\u0440 \u0441\u043E\u043D\u0438', value: `${question.questionCount} та` }), _jsx(InfoRow, { label: '\u049A\u0430\u0439\u0442\u0430 \u0442\u043E\u043F\u0448\u0438\u0440\u0438\u0448 \u0432\u0430\u049B\u0442\u0438', value: `${question.retakeDate} кундан кейин` })] }), _jsx("div", { className: 'flex items-end justify-end md:ml-6', children: _jsx(Button, { asChild: true, className: 'w-full md:w-auto bg-[#44556A] hover:bg-[#2f3b4a] text-white', children: _jsx(Link, { to: `/tests/${question.id}`, children: "\u0411\u043E\u0448\u043B\u0430\u0448" }) }) })] })] }) }) }));
}
function InfoRow({ label, value }) {
    return (_jsxs("div", { className: 'flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2', children: [_jsxs("span", { className: 'font-medium text-[#44556A]', children: [label, ":"] }), _jsx("span", { className: 'font-medium text-[#44556A]', children: value })] }));
}
