import { AiOutlineInfoCircle, AiOutlineCheckCircle, AiOutlineWarning, AiOutlineCloseCircle } from 'react-icons/ai';


export const typeStyles = {
    info: {
        icon: <AiOutlineInfoCircle className="text-blue-500 text-lg" />,
        className: 'bg-blue-100 text-blue-800',
    },
    success: {
        icon: <AiOutlineCheckCircle className="text-green-600 text-lg" />,
        className: 'bg-green-100 text-green-800',
    },
    warning: {
        icon: <AiOutlineWarning className="text-yellow-600 text-lg" />,
        className: 'bg-yellow-100 text-yellow-800',
    },
    error: {
        icon: <AiOutlineCloseCircle className="text-red-600 text-lg" />,
        className: 'bg-red-100 text-red-800',
    },
};
