import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/recipeActions';
import RecipeDetails from '../components/RecipeDetail';
import { selectorRecipe } from '../utils/selectors';
import PageTitle from '../components/PageTitle';
import RecipeTags from '../components/RecipeTags';

import RecipeMarks from '../components/RecipeMarks';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectorRecipe);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (recipes.length > 0 && !selectedRecipe) {
      setSelectedRecipe(recipes[0]);
    }
  }, [recipes, selectedRecipe]);

  return (
    <div className="flex gap-20">
      <div className="w-[717px]">
        <PageTitle
          title="Food"
          showButton={true}
          buttonText="Add new recipe"
          buttonIcon="/add.svg"
          buttonLink="/add"
        />

        <RecipeTags onSelect={setSelectedRecipe} selectedRecipe={selectedRecipe} />
      </div>

      <div className="w-106 rounded-[30px] overflow-hidden">
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </div>
    </div>
  );
};

export default Home;
