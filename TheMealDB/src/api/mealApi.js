import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const fetchCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
};

export const fetchMealsByCategory = async (category, page = 0, size = 10) => {
    const response = await axios.get(`${API_BASE_URL}/recipes/category/${category}`, {
        params: { page, size },
    });
    return response.data;
};

export const fetchRecipeById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/recipes/${id}`);
    return response.data;
};

export const fetchRandomRecipe = async () => {
    const response = await axios.get(`${API_BASE_URL}/recipes/random`);
    return response.data;
};

export const searchRecipesByName = async (name) => {
    const response = await axios.get(`${API_BASE_URL}/recipes/search`, {
        params: { name },
    });
    return response.data;
};
