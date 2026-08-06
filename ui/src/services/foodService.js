import api from "../api/axios";

export const analyzeMeal = async (meal) => {
    const response = await api.post("/food/analyze", { meal });
    return response.data.data;
};

export const getMealHistory = async () => {
    const response = await api.get("/food/history");
    return response.data.data;
};

export const deleteMeal = async (mealId) => {
    return await api.delete(`/food/history/${mealId}`);
};