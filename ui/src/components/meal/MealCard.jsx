import {
    FaTrash,
    FaFire,
    FaDumbbell,
    FaHeart,
    FaCalendarAlt
} from "react-icons/fa";

import {
    format,
    isToday,
    isYesterday
} from "date-fns";

export default function MealCard({

                                     meal,
                                     onDelete

                                 }) {

    const formatDate = (date) => {

        const mealDate = new Date(date);

        if (isToday(mealDate)) {

            return `Today • ${format(mealDate, "hh:mm a")}`;

        }

        if (isYesterday(mealDate)) {

            return `Yesterday • ${format(mealDate, "hh:mm a")}`;

        }

        return format(
            mealDate,
            "dd MMM yyyy • hh:mm a"
        );

    };

    return (

        <div className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300 p-6 rounded-3xl

overflow-hidden

hover:shadow-2xl

hover:-translate-y-2

transition-all
duration-300">

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-2xl font-bold text-slate-800">

                        🍽 {meal.meal}

                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-slate-500">

                        <FaCalendarAlt />

                        <span>

                            {formatDate(meal.analyzedAt)}

                        </span>

                    </div>

                </div>

                <button
                    onClick={() => onDelete(meal.id)}
                    className="p-3 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition"
                >

                    <FaTrash />

                </button>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="bg-orange-50 rounded-xl p-4 text-center">

                    <FaFire className="mx-auto text-orange-500 text-2xl mb-2" />

                    <p className="text-sm text-slate-500">

                        Calories

                    </p>

                    <h3 className="font-bold text-xl">

                        {meal.calories} kcal

                    </h3>

                </div>

                <div className="bg-blue-50 rounded-xl p-4 text-center">

                    <FaDumbbell className="mx-auto text-blue-500 text-2xl mb-2" />

                    <p className="text-sm text-slate-500">

                        Protein

                    </p>

                    <h3 className="font-bold text-xl">

                        {meal.protein} g

                    </h3>

                </div>

                <div className="bg-red-50 rounded-xl p-4 text-center">

                    <FaHeart className="mx-auto text-red-500 text-2xl mb-2" />

                    <p className="text-sm text-slate-500">

                        Health Score

                    </p>

                    <h3 className="font-bold text-xl">

                        {meal.healthScore}/10

                    </h3>

                </div>

            </div>

            <div className="mt-6 border-t pt-4">

                <h4 className="font-semibold text-slate-700 mb-2">

                    💡 Suggestions

                </h4>

                <p className="text-slate-600">

                    {meal.suggestions}

                </p>

            </div>

        </div>

    );

}