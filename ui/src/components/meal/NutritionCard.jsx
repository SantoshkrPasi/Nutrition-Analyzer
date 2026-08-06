export default function NutritionCard({
                                          title,
                                          value,
                                          icon,
                                          color
                                      }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-lg transition">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-slate-500 text-sm">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {value}
                    </h2>

                </div>

                <div className={`text-4xl ${color}`}>
                    {icon}
                </div>

            </div>

        </div>

    );

}