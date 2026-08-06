import { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

import { getMealHistory } from "../../services/foodService";

export default function WeeklyNutritionChart() {

    const [chartData, setChartData] = useState([]);
    const [metric, setMetric] = useState("calories");

    useEffect(() => {
        loadChart();
    }, [metric]);

    const loadChart = async () => {

        try {

            const meals = await getMealHistory();

            prepareChartData(meals);

        } catch (error) {

            console.error(error);

        }

    };

    const prepareChartData = (meals) => {

        const weeklyData = {
            Mon: 0,
            Tue: 0,
            Wed: 0,
            Thu: 0,
            Fri: 0,
            Sat: 0,
            Sun: 0
        };

        meals.forEach((meal) => {

            const day = new Date(meal.analyzedAt)
                .toLocaleDateString("en-US", {
                    weekday: "short"
                });

            weeklyData[day] += meal[metric];

        });

        const result = Object.keys(weeklyData).map((day) => ({
            day,
            value: weeklyData[day]
        }));

        setChartData(result);

    };

    return (

        <div className="bg-white rounded-2xl shadow-sm border p-6 mt-10">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">

                    📈 Weekly Nutrition

                </h2>

                <div className="flex gap-2">

                    <button
                        onClick={() => setMetric("calories")}
                        className={`px-3 py-2 rounded-lg ${
                            metric === "calories"
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-200"
                        }`}
                    >
                        Calories
                    </button>

                    <button
                        onClick={() => setMetric("protein")}
                        className={`px-3 py-2 rounded-lg ${
                            metric === "protein"
                                ? "bg-blue-500 text-white"
                                : "bg-slate-200"
                        }`}
                    >
                        Protein
                    </button>

                    <button
                        onClick={() => setMetric("healthScore")}
                        className={`px-3 py-2 rounded-lg ${
                            metric === "healthScore"
                                ? "bg-red-500 text-white"
                                : "bg-slate-200"
                        }`}
                    >
                        Health Score
                    </button>

                </div>

            </div>

            <ResponsiveContainer width="100%" height={320}>

                <LineChart data={chartData}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="day" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#10b981"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}