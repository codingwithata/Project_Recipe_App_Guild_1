import React from "react";
import RecipeRow from "./RecipeRow";
import "./RecipeList.css"
function RecipeList({ recipes, setRecipes }) {

    const handleDelete = (index) => {
      setRecipes((prevRecipes) => {
        const updatedRecipes = [...prevRecipes];
        updatedRecipes.splice(index, 1); // Remove the post at the specified index
        return updatedRecipes;
      });
    }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <RecipeRow key={recipe.id} recipe={recipe} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
