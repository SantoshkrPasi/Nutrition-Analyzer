export default function DashboardCard({
                                          title,
                                          value,
                                          icon,
                                          color,
                                      }) {
    return (
        <div
            className="
            group
            relative
            overflow-hidden

            rounded-3xl

            bg-white/90
            backdrop-blur-md

            border
            border-slate-200

            p-6

            shadow-lg

            transition-all
            duration-300

            hover:-translate-y-2
            hover:shadow-2xl
            hover:border-emerald-200
        "
        >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-center justify-between">

                <div>

                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                        {title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        {value}
                    </h2>

                </div>

                <div
                    className={`
                    h-16
                    w-16

                    rounded-2xl

                    flex
                    items-center
                    justify-center

                    bg-slate-100

                    text-3xl

                    ${color}

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:rotate-6
                `}
                >
                    {icon}
                </div>

            </div>
        </div>
    );
}