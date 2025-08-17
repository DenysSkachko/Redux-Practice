import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../store/recipeActions';
import PageTitle from '../components/PageTitle';
import RecipeTags from '../components/RecipeTags';
import RecipePreview from '../components/RecipePreview';
import { selectorRecipe, selectorSelectedRecipe } from '../utils/selectors';
import { setSelectedRecipe } from '../store/selectedRecipeReducer';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectorRecipe);
  const selectedRecipe = useSelector(selectorSelectedRecipe);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (recipes.length > 0 && !selectedRecipe) {
      dispatch(setSelectedRecipe(recipes[0]));
    }
  }, [recipes, selectedRecipe, dispatch]);

  return (
    <>
      <div className="w-[717px]">
        <PageTitle
          title="Food"
          showButton={true}
          buttonText="Add new recipe"
          buttonIcon="/add.svg"
          buttonLink="/add"
        />

        <RecipeTags />
      </div>

      <RecipePreview />
    </>
  );
};

export default Home;
