const defaultState = {
  items: [],
};

const SET_RECIPES = 'SET_RECIPES';
const ADD_RECIPE = 'ADD_RECIPE';

export const recipeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, items: action.payload };
    case ADD_RECIPE:
      return { ...state, items: [...state.items, action.payload] };

    default:
      return state;
  }
};

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  payload: recipes,
});

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});
