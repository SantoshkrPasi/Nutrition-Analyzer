export default function Button({
                                   children, type = "button", onClick, disabled = false, className = ""
                               }) {

    return (

        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
w-full

rounded-2xl

bg-gradient-to-r
from-emerald-500
to-green-600

text-white
font-semibold

py-3.5

shadow-lg
shadow-emerald-500/20

transition-all
duration-300

hover:-translate-y-1
hover:shadow-xl
hover:shadow-emerald-500/30

active:scale-[0.98]

disabled:opacity-60
disabled:cursor-not-allowed

${className}
`}
        >
            {children}
        </button>

    );

}