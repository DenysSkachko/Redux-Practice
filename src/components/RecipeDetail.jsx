import useBookmarks from '../hooks/useBookmarks';
import { isBookmarked } from '../utils/bookmarks';
import { Link } from 'react-router-dom';

const RecipeDetail = ({ recipe }) => {
  const { bookmarks, addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  const bookmarked = isBookmarked(recipe.id);

  return (
    <div className="relative bg-primary text-dark h-fit p-[30px] rounded-[30px] overflow-hidden">
      <button
        onClick={() => (bookmarked ? removeBookmark(recipe.id) : addBookmark(recipe.id))}
        className="absolute top-5 right-5 z-20 bg-light p-4 rounded-full"
      >
        <img
          src={bookmarked ? '/book.svg' : '/book-empty.svg'}
          alt="bookmark"
          className="w-8 h-8 cursor-pointer"
        />
      </button>
      {recipe.image ? (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="absolute top-0 left-0 w-full h-[318px] object-cover z-0"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-[318px] bg-primary-alt-alt  flex items-center justify-center  z-0"></div>
      )}

      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.71) 1%, rgba(255, 255, 255, 0) 40%)',
        }}
      />

      <div className="relative z-20 bg-light  p-[30px] rounded-[30px] mt-[218px] flex flex-col">
        <h2 className="text-2xl font-semibold mb-4 ">{recipe.title}</h2>
        <p className="text-dark/44 text-lg font-medium mb-7.5">{recipe.description}</p>
        <h3 className="font-medium text-lg mb-2">Ingredients:</h3>
        <ul className="mb-5">
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ing, index) => (
              <li key={index} className="font-medium text-lg text-dark/63 flex justify-between">
                <span>{ing.name}</span> <span>{ing.quantity}</span>
              </li>
            ))
          ) : (
            <li className="font-medium text-lg">No ingredients</li>
          )}
        </ul>
        <Link
          to={`/recipe/${recipe.id}`}
          className="px-[70px] py-[15px] rounded-[30px] w-full text-center bg-[#32AFA9] text-light font-medium text-2xl block"
        >
          VIEW RECIPE
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
