import { useEffect, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import MealCard from "../../components/meal/MealCard";
import EmptyState from "../../components/common/EmptyState";
import Loader from "../../components/common/Loader";
import DeleteModal from "../../components/common/DeleteModal";

import toast from "react-hot-toast";

import {
    getMealHistory,
    deleteMeal
} from "../../services/foodService";

export default function MealHistory() {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedMealId, setSelectedMealId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const loadMeals = async () => {

        try {

            const data = await getMealHistory();

            setMeals(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadMeals();

    }, []);

    const openDeleteModal = (id) => {

        setSelectedMealId(id);

        setShowDeleteModal(true);

    };

    const handleDelete = async () => {

        try {

            await deleteMeal(selectedMealId);

            toast.success("Meal deleted successfully!");

            await loadMeals();

        } catch (error) {

            toast.error("Failed to delete meal.");

        } finally {

            setShowDeleteModal(false);

            setSelectedMealId(null);

        }

    };

    if (loading) {

        return (

            <MainLayout>

                <Loader />

            </MainLayout>

        );

    }

    if (meals.length === 0) {

        return (

            <MainLayout>

                <h1 className="text-4xl font-bold mb-8">

                    Meal History

                </h1>

                <EmptyState
                    message="No meals analyzed yet."
                />

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
                        onDelete={openDeleteModal}
                    />

                ))}

            </div>

            <DeleteModal
                isOpen={showDeleteModal}
                onClose={() => {

                    setShowDeleteModal(false);
                    setSelectedMealId(null);

                }}
                onConfirm={handleDelete}
            />

        </MainLayout>

    );

}