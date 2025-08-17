import { setFilteredRecipes } from './recipeReducer';

export const searchRecipes = (query) => (dispatch, getState) => {
  const { items } = getState().recipes; 

  if (!query) {
    dispatch(setFilteredRecipes(items));
    return;
  }

  const lowerQuery = query.toLowerCase();

  const filtered = items.filter((r) => {
    const titleSearch = r.title.toLowerCase().includes(lowerQuery);
    const tagsSearch = r.tags?.some(tag => tag.toLowerCase().includes(lowerQuery));
    const ingredientsSearch = r.ingredients?.some(ing => ing.name.toLowerCase().includes(lowerQuery));
    return titleSearch || tagsSearch || ingredientsSearch;
  });

  dispatch(setFilteredRecipes(filtered));
};
