import {useState} from "react";
import {analyzeMeal} from "../../services/foodService";
import toast from "react-hot-toast";

export default function AnalyzeMealSection({onAnalysisComplete}) {

    const [meal, setMeal] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {

        if (!meal.trim()) {
            toast.error("Please enter a meal.");
            return;
        }

        try {

            setLoading(true);

            const nutrition = await analyzeMeal(meal);

            onAnalysisComplete(nutrition);
            toast.success("Meal analyzed successfully!");

            setMeal("");

        } catch (error) {

            console.error(error);

            toast.error("Failed to analyze meal.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="bg-white rounded-2xl shadow-sm border p-8 mt-10">

            <h2 className="text-2xl font-bold">
                🍽 Analyze Today's Meal
            </h2>

            <p className="text-slate-500 mt-2">
                Describe your meal and let AI estimate the nutrition.
            </p>

            <textarea
                rows="5"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                placeholder="Example: 2 dosa with sambar and coffee"
                className="w-full mt-6 rounded-xl border p-4 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button
                onClick={handleAnalyze}
                disabled={loading}
                className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl disabled:bg-gray-400"
            >
                {loading ? "Analyzing..." : "Analyze Meal"}
            </button>

        </div>

    );

}