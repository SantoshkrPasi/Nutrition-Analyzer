import MainLayout from "../../components/layout/MainLayout";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsSection from "../../components/dashboard/StatsSection";
import RecentMeals from "../../components/dashboard/RecentMeals";
import WeeklyNutritionChart from "../../components/dashboard/WeeklyNutritionChart";
import {useEffect, useState} from "react";
import {getDashboard} from "../../services/dashboardService";

export default function Dashboard() {
    const [dashboard, setDashboard] = useState(null);
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

            <WelcomeBanner />

            <StatsSection dashboard={dashboard} />

            <RecentMeals />
            <WeeklyNutritionChart />

        </MainLayout>

    );

}