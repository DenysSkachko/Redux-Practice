import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorRecipe } from '../utils/selectors';

const RecipePage = () => {
  const { id } = useParams();
  const recipes = useSelector(selectorRecipe);
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="p-4 text-dark">
      <h1>{recipe.title}</h1>
      {recipe.image && (
        <img src={recipe.image} alt={recipe.title} className="my-4 w-full max-w-md" />
      )}

      <p>{recipe.description}</p>

      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients?.map((ing, index) => (
          <li key={index}>
            {ing.name} - {ing.quantity}
          </li>
        ))}
      </ul>

      {recipe.tags?.length > 0 && (
        <div>
          <h2>Tags:</h2>
          <ul className="flex gap-2 flex-wrap">
            {recipe.tags.map((tag, index) => (
              <li key={index} className="px-2 py-1 bg-gray-300 rounded">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      {recipe.steps?.length > 0 && (
        <div className="mt-4">
          <h2>Steps:</h2>
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
  );
};

export default RecipePage;
