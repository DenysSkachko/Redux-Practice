import AddRecipeForm from '../components/AddRecipeForm';
import PageTitle from '../components/PageTitle';

const AddRecipe = () => {
  return (
    <>
      <div className="flex gap-20">
        <div className="w-[717px]">
          <PageTitle title="Add Recipe" />
          <div className="bg-primary-alt w-fit rounded-[30px] py-5 px-6">
            <AddRecipeForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
