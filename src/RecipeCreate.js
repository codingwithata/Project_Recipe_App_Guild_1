import React, { useState } from "react";
import "./RecipeCreate.css"

function RecipeCreate() {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  // const [name, setName] = useState("");
  // const [cuisine, setCuisine] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [rating, setRating] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [preparation, setPreparation] = useState("");
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setFormData({
      ...initialFormState
    })
  }

  return (
    <form onSubmit={handleSubmit} name="create">
  <table>
  <tbody>
  <tr>
    <th>Name</th>
    <th>Cuisine</th>
    <th>Photo</th>
    <th>Ingredients</th>
    <th>Preparation</th>
    <th>Actions</th>
  </tr>
  
      <tr>
        <td>
        <label>
          <input
            id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name} 
          >
          </input>
          </label>
        </td>
        <td>
        <label>

          <input
          id="cuisine"
          type="text"
          name="cuisine"
          onChange={handleChange}
          value={formData.cuisine} 
          >
          </input>
          </label>
        </td>
        <td>
        <label>
          <input
            id="photo"
          type="text"
          name="photo"
          onChange={handleChange}
          value={formData.photo} 
          >
          </input>
          </label>
        </td>
        <td>
        <label>
          <textarea
          id="ingredients"
          type="text"
          name="ingredients"
          onChange={handleChange}
          value={formData.ingredients} 
          >
          </textarea>
          </label>
        </td>
        <td>
        <label>
          <textarea
          id="preparation"
          type="textarea"
          name="preparation"
          onChange={handleChange}
          value={formData.preparation} 
          >
          </textarea>
          </label>
        </td>
        <td>
          <button type="submit">Create</button>
        </td>
      </tr>
    </tbody>
  </table>
</form>

  );
}

export default RecipeCreate;


