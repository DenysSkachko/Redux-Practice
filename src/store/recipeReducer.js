const defaultState = {
  items: [],
  filtered: [],
};

const SET_RECIPES = 'SET_RECIPES';
const ADD_RECIPE = 'ADD_RECIPE';
const SET_FILTERED_RECIPES = 'SET_FILTERED_RECIPES';

export const recipeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, items: action.payload, filtered: action.payload };
    case ADD_RECIPE:
      return {
        ...state,
        items: [...state.items, action.payload],
        filtered: [...state.filtered, action.payload],
      };
    case SET_FILTERED_RECIPES:
      return { ...state, filtered: action.payload };
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

export const setFilteredRecipes = (recipes) => ({
  type: SET_FILTERED_RECIPES,
  payload: recipes,
});
