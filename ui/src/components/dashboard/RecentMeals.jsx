export default function RecentMeals() {

    return (

        <div className="bg-white rounded-2xl shadow-sm border p-8 mt-10">

            <h2 className="text-2xl font-bold">
                Recent Meals
            </h2>

            <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                    <span>🥗 Salad</span>
                    <span>220 kcal</span>
                </div>

                <div className="flex justify-between">
                    <span>🍗 Chicken</span>
                    <span>540 kcal</span>
                </div>

                <div className="flex justify-between">
                    <span>🍳 Omelette</span>
                    <span>300 kcal</span>
                </div>

            </div>

        </div>

    );

}