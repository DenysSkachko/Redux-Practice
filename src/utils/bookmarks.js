export const isBookmarked = (bookmarks, recipe) => {
  return bookmarks.some((r) => r.id === recipe.id);
};

export const findBookmark = (bookmarks, id) => {
  return bookmarks.find((r) => r.id === id);
};

export const deleteBookmark = (bookmarks, id) => {
  return bookmarks.filter((r) => r.id !== id);
};