export default function Button({
                                   children,
                                   type = "button",
                                   onClick,
                                   disabled = false,
                                   className = ""
                               }) {

    return (

        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                w-full
                bg-emerald-500
                hover:bg-emerald-600
                text-white
                font-semibold
                py-3
                rounded-xl
                transition
                duration-300
                shadow-md
                hover:shadow-lg
                disabled:bg-gray-400
                disabled:cursor-not-allowed
                ${className}
            `}
        >
            {children}
        </button>

    );

}