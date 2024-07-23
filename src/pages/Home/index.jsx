import React, { useState } from 'react';
import { createRecipe } from '../../utils/api';
import Button from '../../base/Button';
import Input from '../../base/Input';
import './style.css';

const Home = ({ user }) => {
    const [newRecipe, setNewRecipe] = useState({ name: '', description: '', ingredients: '', steps: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleCreateRecipe = async () => {
        try {
            const recipeData = {
                name: newRecipe.name,
                ingredients: newRecipe.ingredients,
                steps: newRecipe.steps,
                user_id: 4  //test
            };

            console.log("Creating recipe with data:", recipeData);

            const response = await createRecipe(recipeData);
            console.log("Recipe creation response:", response);

            if (response.status === 'Recipe created successfully') {
                setSuccess("Recipe created successfully!");
                setError('');
            } else {
                setError(response.error);
                setSuccess('');
            }
        } catch (error) {
            console.error("Error creating recipe:", error);
            setError("Error creating recipe.");
            setSuccess('');
        }
    };

    return (
        <div className="home-page">
            <h2>Welcome, {user.username}</h2>
            <div className="create-recipe">
                <h3>Create Recipe</h3>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <Input
                    placeholder="Name"
                    value={newRecipe.name}
                    onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
                />
                <Input
                    placeholder="Description"
                    value={newRecipe.description}
                    onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                />
                <textarea
                    placeholder="Ingredients"
                    value={newRecipe.ingredients}
                    onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
                />
                <textarea
                    placeholder="Steps"
                    value={newRecipe.steps}
                    onChange={(e) => setNewRecipe({ ...newRecipe, steps: e.target.value })}
                />
                <Button text="Create" onClick={handleCreateRecipe} />
            </div>
        </div>
    );
};

export default Home;
