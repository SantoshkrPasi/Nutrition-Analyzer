export default function DashboardCard({
                                          title,
                                          value,
                                          icon,
                                          color
                                      }) {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                p-6
                shadow-sm
                border
                border-slate-200
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
            "
        >

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-slate-500 text-sm">

                        {title}

                    </p>

                    <h2 className="text-4xl font-bold mt-3">

                        {value}

                    </h2>

                </div>

                <div className={`text-5xl ${color}`}>

                    {icon}

                </div>

            </div>

        </div>

    );

}