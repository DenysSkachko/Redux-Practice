const COLORS = ['#E6AF33', '#32AFA9', '#86C693', '#74D7D3', '#4A9C5B'];
const colorMap = {};

export const getTagColor = (tag) => {
  if (!colorMap[tag]) {
    colorMap[tag] = COLORS[Math.floor(Math.random() * COLORS.length)];
  }
  return colorMap[tag];
};

export const getAllTags = (recipes) => {
  const tagsSet = new Set();
  recipes.forEach((r) => r.tags?.forEach((tag) => tagsSet.add(tag)));
  return Array.from(tagsSet);
};

export const filterByTags = (recipes, activeTags) => {
  if (!activeTags || activeTags.length === 0) return recipes;
  return recipes.filter((r) =>
    activeTags.every((tag) => r.tags?.includes(tag))
  );
};

export const addTag = (activeTags, tag) => {
  if (!activeTags.includes(tag)) return [...activeTags, tag];
  return activeTags;
};

export const removeTag = (activeTags, tag) => {
  return activeTags.filter((t) => t !== tag);
};

export const clearTags = () => [];
