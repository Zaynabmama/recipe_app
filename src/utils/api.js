
import axios from 'axios';

const API_BASE_URL = 'http://localhost/recipe_app/BACKEND_RECIPE_APP/api';

export const signIn = async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/users/loginUser.php`, {
        email,
        password
    });
    return response.data;
};


const apiiiiiii = 'http://localhost/recipe_app/BACKEND_RECIPE_APP/api';

const apiii = `${apiiiiiii}/recipes/addRecipe.php`;

export const createRecipe = async (recipeData) => {
    try {
        const response = await axios.post(apiii, recipeData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Error in createRecipe:", error);
        throw error;
    }
};

const apiBaseUrl = 'http://localhost/recipe_app/BACKEND_RECIPE_APP/api';


export const fetchRecipes = async (query) => {
    try {
        const response = await axios.get(`${apiBaseUrl}/recipes/searchRecipe.php`, {
            params: { search: query },
            withCredentials: true // Make sure credentials are sent
        });
        return response.data;
    } catch (error) {
        console.error("Error in fetchRecipes:", error);
        throw error;
    }
};
