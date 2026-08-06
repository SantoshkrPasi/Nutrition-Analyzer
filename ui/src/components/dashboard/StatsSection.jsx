import DashboardCard from "./DashboardCard";
import {
    FaFire,
    FaHeart,
    FaUtensils,
    FaDumbbell
} from "react-icons/fa";

export default function StatsSection({ dashboard }) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <DashboardCard
                title="Meals Today"
                value={dashboard?.mealsToday ?? 0}
                icon={<FaUtensils />}
                color="text-emerald-500"
            />

            <DashboardCard
                title="Calories"
                value={dashboard?.totalCalories ?? 0}
                icon={<FaFire />}
                color="text-orange-500"
            />

            <DashboardCard
                title="Protein"
                value={`${dashboard?.totalProtein ?? 0} g`}
                icon={<FaDumbbell />}
                color="text-blue-500"
            />

            <DashboardCard
                title="Health Score"
                value={dashboard?.averageHealthScore ?? 0}
                icon={<FaHeart />}
                color="text-red-500"
            />

        </div>

    );

}