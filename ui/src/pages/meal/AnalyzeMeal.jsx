import { useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import AnalyzeMealSection from "../../components/dashboard/AnalyzeMealSection";
import NutritionResult from "../../components/meal/NutritionResult";

export default function AnalyzeMeal() {

    const [nutrition, setNutrition] = useState(null);

    return (

        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    🍽 Analyze Meal

                </h1>

                <p className="text-slate-500 mt-2">

                    Describe your meal and let AI estimate its nutritional value.

                </p>

            </div>

            <AnalyzeMealSection
                onAnalysisComplete={setNutrition}
            />

            <NutritionResult
                nutrition={nutrition}
            />

        </MainLayout>

    );

}