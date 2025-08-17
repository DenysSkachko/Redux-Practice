import { useDispatch } from 'react-redux';
import RecipeSearch from '../components/RecipeSearch';
import PageTitle from '../components/PageTitle';
import RecipePreview from '../components/RecipePreview';
import { setSelectedRecipe } from '../store/selectedRecipeReducer';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-[717px]">
        <PageTitle title="Search" />
        <RecipeSearch onSelect={(recipe) => dispatch(setSelectedRecipe(recipe))} />
      </div>

      <RecipePreview />
    </>
  );
};

export default Search;
