import React from "react";
function RecipeRow({ recipe, onDelete }) {
  return (
    <tr key={recipe.id}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>{recipe.photo}</td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button onClick={() => onDelete(recipe.id)} name="delete">
          Delete
        </button>
      </td>
    </tr>
  );
}

function RecipeList({ recipes, setRecipes }) {
  const handleDelete = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

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
