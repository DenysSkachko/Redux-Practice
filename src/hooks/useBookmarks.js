import { useEffect, useState } from 'react';

const STORAGE_KEY = 'bookmarks';

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const addBookmark = (id) => {
    if (!bookmarks.includes(id)) {
      const updated = [...bookmarks, id];
      setBookmarks(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const removeBookmark = (id) => {
    const updated = bookmarks.filter((bid) => bid !== id);
    setBookmarks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const isBookmarked = (id) => bookmarks.includes(id);

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
  };
};

export default useBookmarks;
