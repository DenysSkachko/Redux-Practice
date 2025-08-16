export const isBookmarked = (bookmarks, id) => {
  return bookmarks.includes(id);
};

export const findBookmark = (bookmarks, id) => {
  return bookmarks.find((r) => r === id);
};

export const deleteBookmark = (bookmarks, id) => {
  return bookmarks.filter((r) => r !== id);
};
