import { useEffect, useState } from "react";
import { getMealHistory } from "../../services/foodService";

export default function RecentMeals() {

    const [meals, setMeals] = useState([]);

    const loadMeals = async () => {

        try {

            const data = await getMealHistory();

            // Show only latest 3 meals
            setMeals(data.slice(0, 3));

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        loadMeals();

    }, []);

    return (

        <div className="bg-white rounded-2xl shadow-sm border p-8 mt-10">

            <h2 className="text-2xl font-bold">

                Recent Meals

            </h2>

            {
                meals.length === 0 ? (

                    <p className="text-slate-500 mt-6">

                        No meals analyzed yet.

                    </p>

                ) : (

                    <div className="mt-6 space-y-4">

                        {meals.map((meal) => (

                            <div
                                key={meal.id}
                                className="flex justify-between items-center border-b pb-4"
                            >

                                <div>

                                    <h3 className="font-semibold text-lg">

                                        {meal.meal}

                                    </h3>

                                    <p className="text-sm text-slate-500">

                                        ❤️ Health Score: {meal.healthScore}/10

                                    </p>

                                </div>

                                <div className="text-right">

                                    <p className="font-semibold text-emerald-600">

                                        🔥 {meal.calories} kcal

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                )

            }

        </div>

    );

}