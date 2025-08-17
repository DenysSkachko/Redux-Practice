const defaultState = null;

const SET_SELECTED_RECIPE = 'SET_SELECTED_RECIPE';

export const selectedRecipeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_RECIPE:
      return action.payload;
    default:
      return state;
  }
};

export const setSelectedRecipe = (recipe) => ({
  type: SET_SELECTED_RECIPE,
  payload: recipe,
});