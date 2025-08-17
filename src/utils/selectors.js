export const selectorRecipe = (state) => state.recipes.items

export const selectorSearch = (state) => state.recipes.filtered

export const selectorAllTags = (state) => state.tags.all;
export const selectorActiveTags = (state) => state.tags.active;
export const selectorFiltered = (state) => state.recipes.filtered;