import { setSelectedRecipe as setSelectedRecipeReducer } from './selectedRecipeReducer';

export const selectRecipe = (recipe) => (dispatch) => {
  dispatch(setSelectedRecipeReducer(recipe));
};
