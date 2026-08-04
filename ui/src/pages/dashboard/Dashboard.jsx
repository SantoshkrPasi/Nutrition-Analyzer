import MainLayout from "../../components/layout/MainLayout";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsSection from "../../components/dashboard/StatsSection";
import AnalyzeMealSection from "../../components/dashboard/AnalyzeMealSection";
import RecentMeals from "../../components/dashboard/RecentMeals";
import NutritionResult from "../../components/meal/NutritionResult";
import {useEffect, useState} from "react";
import {getDashboard} from "../../services/dashboardService";

export default function Dashboard() {
    const [dashboard, setDashboard] = useState(null);
    const [nutrition, setNutrition] = useState(null);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const data = await getDashboard();
            setDashboard(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <MainLayout>

            <WelcomeBanner/>

            <StatsSection dashboard={dashboard}/>
            <AnalyzeMealSection
                onAnalysisComplete={setNutrition}
            /> <NutritionResult nutrition={nutrition} />

            <RecentMeals/>

        </MainLayout>

    );

}