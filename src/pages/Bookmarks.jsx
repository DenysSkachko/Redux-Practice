import PageTitle from '../components/PageTitle';
import RecipeMarks from '../components/RecipeMarks';
import RecipePreview from '../components/RecipePreview';

const Bookmarks = () => {
  return (
    <>
      <div className="w-[717px]">
        <PageTitle title="Bookmarks" />
        <RecipeMarks />
      </div>

      <RecipePreview />
    </>
  );
};

export default Bookmarks;
