import { FaTrash, FaFire } from "react-icons/fa";

export default function MealCard({ meal, onDelete }) {

    return (

        <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition">

            <div className="flex justify-between items-start">

                <div>

                    <h3 className="text-xl font-semibold">

                        {meal.meal}

                    </h3>

                    <p className="text-slate-500 mt-2">

                        {meal.analyzedAt}

                    </p>

                </div>

                <button
                    onClick={() => onDelete(meal.id)}
                    className="text-red-500 hover:text-red-700"
                >
                    <FaTrash />
                </button>

            </div>

            <div className="flex items-center gap-6 mt-6">

                <span className="flex items-center gap-2">

                    <FaFire className="text-orange-500"/>

                    {meal.calories} kcal

                </span>

                <span>

                    💪 {meal.protein} g

                </span>

                <span>

                    ❤️ {meal.healthScore}/10

                </span>

            </div>

        </div>

    );

}