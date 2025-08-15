import { addRecipe, setRecipes } from './recipeReducer';

const API_URL = 'http://localhost:3001/recipes';

export const fetchRecipes = () => {
  return async (dispatch) => {
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(setRecipes(data));
  };
};

export const newRecipe = (recipe) => {
  return async (dispatch) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });
    const data = await response.json();
    dispatch(addRecipe(data));
  };
};