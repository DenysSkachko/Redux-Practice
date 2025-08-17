import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorRecipe } from '../utils/selectors';
import PageTitle from '../components/PageTitle';
import useBookmarks from '../hooks/useBookmarks';

const RecipePage = () => {
  const { id } = useParams();
  const recipes = useSelector(selectorRecipe);
  const recipe = recipes.find((r) => r.id === id);
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  if (!recipe) return <p>Recipe not found</p>;

  const bookmarked = isBookmarked(recipe.id);

  return (
    <div>
    <PageTitle title={recipe.title} />
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
        <div className="absolute top-0 left-0 w-full h-[318px] bg-primary-alt-alt flex items-center justify-center z-0"></div>
      )}

      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.71) 1%, rgba(255, 255, 255, 0) 40%)',
        }}
      />

      <div className="relative z-20 bg-light p-[30px] rounded-[30px] mt-[218px] flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">{recipe.title}</h2>
        <p className="text-dark/44 text-lg font-medium mb-7.5">{recipe.description}</p>

        <h3 className="font-medium text-lg mb-2">Ingredients:</h3>
        <ul className="mb-5">
          {recipe.ingredients?.length > 0 ? (
            recipe.ingredients.map((ing, index) => (
              <li key={index} className="font-medium text-lg text-dark/63 flex justify-between">
                <span>{ing.name}</span> <span>{ing.quantity}</span>
              </li>
            ))
          ) : (
            <li className="font-medium text-lg">No ingredients</li>
          )}
        </ul>

        {recipe.steps?.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium text-lg mb-2">Steps:</h3>
            <ul className="flex flex-col gap-2">
              {recipe.steps.map((step, index) => (
                <li key={index} className="px-2 py-1 bg-gray-200 rounded">
                  {step.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default RecipePage;
