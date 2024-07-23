import React, { useState} from 'react';
import { fetchRecipes } from '../../utils/api'; 
import Button from '../../base/Button';
import './style.css'; 

const SearchRecipes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetchRecipes(searchQuery);
            if (response.recipes) {
                setRecipes(response.recipes);
            } else {
                console.error("Error:", response.error);
            }
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    return (
        <div className="search-page">
            <h2>Search Recipes</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button text="Search" onClick={handleSearch} />
            </div>
            <div className="recipe-cards">
                {recipes.length ? (
                    recipes.map((recipe) => (
                        <div key={recipe.id} className="recipe-card">
                            <h3>{recipe.name}</h3>
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.steps}</p>
                        </div>
                    ))
                ) : (
                    <p>No recipes found</p>
                )}
            </div>
        </div>
    );
};

export default SearchRecipes;
