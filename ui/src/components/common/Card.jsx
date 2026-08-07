export default function Card({ children, className = "" }) {

    return (

        <div
            className={`
bg-white/80
backdrop-blur-xl

border
border-white/40

rounded-3xl

shadow-[0_20px_60px_rgba(15,23,42,0.08)]

transition-all
duration-300

hover:-translate-y-1
hover:shadow-[0_30px_80px_rgba(15,23,42,.12)]

p-7

${className}
`}
        >

            {children}

        </div>

    );

}