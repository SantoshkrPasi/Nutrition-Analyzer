import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import MealCard from "../../components/meal/MealCard";
import EmptyState from "../../components/common/EmptyState";
import Loader from "../../components/common/Loader";

import {
    getMealHistory,
    deleteMeal
} from "../../services/foodService";

export default function MealHistory() {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load all meals
    const loadMeals = async () => {

        try {

            const data = await getMealHistory();

            setMeals(data);

        } catch (error) {

            console.error("Failed to fetch meals:", error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadMeals();

    }, []);

    // Delete meal
    const handleDelete = async (id) => {

        try {

            await deleteMeal(id);

            // Refresh the list after deleting
            loadMeals();

        } catch (error) {

            console.error("Failed to delete meal:", error);

        }

    };

    // Loading UI
    if (loading) {

        return (
            <MainLayout>
                <Loader />
            </MainLayout>
        );

    }

    // Empty UI
    if (meals.length === 0) {

        return (
            <MainLayout>

                <h1 className="text-4xl font-bold mb-8">
                    Meal History
                </h1>

                <EmptyState message="No meals analyzed yet." />

            </MainLayout>
        );

    }

    return (

        <MainLayout>

            <h1 className="text-4xl font-bold mb-8">

                Meal History

            </h1>

            <div className="space-y-6">

                {meals.map((meal) => (

                    <MealCard
                        key={meal.id}
                        meal={meal}
                        onDelete={handleDelete}
                    />

                ))}

            </div>

        </MainLayout>

    );

}