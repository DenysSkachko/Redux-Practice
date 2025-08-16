import { addRecipe, setRecipes } from './recipeReducer';

const API_URL = 'http://localhost:3001/recipes';

export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        console.debug(`Server error: ${response.status}`);
        dispatch(setRecipes([]));
        return;
      }
      const data = await response.json();
      dispatch(setRecipes(data));
    } catch (error) {
      console.debug('Failed to connect to server. Using empty array.', error);
      dispatch(setRecipes([]));
    }
  };
};

export const newRecipe = (recipe) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      });
      if (!response.ok) {
        console.debug(`Server error when adding recipe: ${response.status}`);
        return;
      }
      const data = await response.json();
      dispatch(addRecipe(data));
    } catch (error) {
      console.debug('Failed to connect to server when adding recipe.', error);
    }
  };
};
