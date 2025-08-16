import { useEffect, useState } from 'react';
import { isBookmarked, deleteBookmark } from '../utils/bookmarks';

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const addBookmark = (recipe) => {
    const exists = isBookmarked(bookmarks, recipe);
    if (!exists) {
      const updated = [...bookmarks, recipe];
      setBookmarks(updated);
      localStorage.setItem('bookmarks', JSON.stringify(updated));
    }
  };

  const removeBookmark = (id) => {
    const updated = deleteBookmark(bookmarks, id);
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
  };
};

export default useBookmarks;
