import React from 'react';
import LikeButton from '../StarRating';
import './style.css'; 

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.steps}</p>
            <div className="actions">
                <LikeButton />
                <button onClick={() => alert('Download or Share')}>Download</button>
            </div>
            <div className="comment-section">
                <input type="text" placeholder="Add a comment..." />
                <button>Submit</button>
            </div>
        </div>
    );
};

export default RecipeCard;
