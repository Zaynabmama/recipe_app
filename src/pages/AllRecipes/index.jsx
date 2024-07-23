import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../../utils/api';
import RecipeCard from '../../base/Recipecard';
import './style.css';

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetchRecipes('');
                if (response.recipes) {
                    setRecipes(response.recipes);
                } else {
                    console.error("Error:", response.error);
                }
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        getRecipes();
    }, []);

    return (
        <div className="recipes-page">
            <h2>All Recipes</h2>
            <div className="recipe-cards">
                {recipes.length ? (
                    recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <p>No recipes found</p>
                )}
            </div>
        </div>
    );
};

export default AllRecipes;
