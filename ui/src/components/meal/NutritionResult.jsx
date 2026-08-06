import NutritionCard from "./NutritionCard";

import {
    FaFire,
    FaDumbbell,
    FaBreadSlice,
    FaHeart,
    FaTint,
    FaLeaf
} from "react-icons/fa";

export default function NutritionResult({nutrition}) {
    if (!nutrition) {
        return null;
    }

    return (

        <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">

                🥗 Nutrition Result

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <NutritionCard
                    title="Calories"
                    value={`${nutrition.calories} kcal`} icon={<FaFire/>}
                    color="text-orange-500"
                />

                <NutritionCard
                    title="Protein"
                    value={`${nutrition.protein} g`} icon={<FaDumbbell/>}
                    color="text-blue-500"
                />

                <NutritionCard
                    title="Carbs"
                    value={`${nutrition.carbs} g`} icon={<FaBreadSlice/>}
                    color="text-yellow-500"
                />

                <NutritionCard
                    title="Health Score"
                    value={`${nutrition.healthScore} / 10`} icon={<FaHeart/>}
                    color="text-red-500"
                />
                <NutritionCard
                    title="Fat"
                    value={`${nutrition.fat} g`}
                    icon={<FaTint />}
                    color="text-purple-500"
                />

                <NutritionCard
                    title="Fiber"
                    value={`${nutrition.fiber} g`}
                    icon={<FaLeaf />}
                    color="text-green-500"
                />

            </div>
            <div className="bg-white rounded-2xl border shadow-sm p-6 mt-8">

                <h3 className="text-2xl font-bold mb-4">

                    💡 Suggestions

                </h3>

                <ul className="space-y-3">

                    {nutrition.suggestions.map((item, index) => (

                        <li
                            key={index}
                            className="flex items-center gap-2"
                        >
                            ✅ {item}
                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

}