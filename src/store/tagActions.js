import { toggleTag, clearTags } from './tagReducer';
import { setFilteredRecipes } from './recipeReducer';

const COLORS = ['#E6AF33', '#32AFA9', '#86C693', '#74D7D3', '#4A9C5B'];
const colorMap = {};
export const getTagColor = (tag) => {
  if (!colorMap[tag]) {
    colorMap[tag] = COLORS[Math.floor(Math.random() * COLORS.length)];
  }
  return colorMap[tag];
};

export const getAllTags = () => (dispatch, getState) => {
  const { items } = getState().recipes;
  const tagsSet = new Set();
  items.forEach((r) => r.tags?.forEach((tag) => tagsSet.add(tag)));
  return Array.from(tagsSet);
};

export const filterByTag = (tag) => (dispatch, getState) => {
  dispatch(toggleTag(tag));

  const { items } = getState().recipes;
  const { active } = getState().tags;

  if (active.length === 0) {
    dispatch(setFilteredRecipes(items));
    return;
  }

  const filtered = items.filter((r) => active.every((t) => r.tags?.includes(t)));
  dispatch(setFilteredRecipes(filtered));
};

export const clearAllTags = () => (dispatch, getState) => {
  dispatch(clearTags());
  const { items } = getState().recipes;
  dispatch(setFilteredRecipes(items));
};
