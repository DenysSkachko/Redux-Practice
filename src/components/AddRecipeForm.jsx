import { useForm, useFieldArray } from 'react-hook-form';
import Input from './ui/Input';
import { MdDelete } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa6';
import { SectionTitle, AddButton, RemoveButton, FieldContainer } from './ui/FormUI';
import { useDispatch } from 'react-redux';
import { newRecipe } from '../store/recipeActions';
import { useState } from 'react';
import Toast from './ui/Toast';

const defaultValue = {
  title: '',
  description: '',
  ingredients: [],
  tags: [],
  steps: [],
  image: null,
};

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const { register, handleSubmit, control, setValue, reset } = useForm({
    defaultValues: defaultValue,
  });

  const {
    fields: ingredients,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({ control, name: 'ingredients' });

  const {
    fields: tags,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({ control, name: 'tags' });

  const {
    fields: steps,
    append: appendStep,
    remove: removeStep,
  } = useFieldArray({ control, name: 'steps' });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setValue('image', reader.result);
      setImagePreview(reader.result);
    };
  };

  const onSubmit = (data) => {
    const payload = {
      ...data,
      ingredients: data.ingredients.filter((i) => i.name || i.quantity),
      steps: data.steps.filter((s) => s.text),
      tags: data.tags.filter((t) => t),
    };
    dispatch(newRecipe(payload));
    reset(defaultValue);
    setImagePreview(null);
    setToastMessage('Recipe added successfully!');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-150 w-full"
      >
        <Input type="text" placeholder="Title" {...register('title')} />
        <Input type="text" placeholder="Description" {...register('description')} />
        <Input type="file" onChange={handleFileChange} />
        {imagePreview && <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />}

        <FieldContainer>
          <SectionTitle>Ingredients</SectionTitle>
          {ingredients.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <Input type="text" placeholder="Ingredient" {...register(`ingredients.${index}.name`)} />
              <Input type="text" placeholder="#" {...register(`ingredients.${index}.quantity`)} className="w-15" />
              <RemoveButton onClick={() => removeIngredient(index)}>
                <MdDelete />
              </RemoveButton>
            </div>
          ))}
          <AddButton onClick={() => appendIngredient({ name: '', quantity: '' })}>
            <FaPlus />
          </AddButton>
        </FieldContainer>

        <FieldContainer>
          <SectionTitle>Tags</SectionTitle>
          {tags.map((field, index) => (
            <div key={field.id} className="flex w-full gap-2">
              <Input type="text" placeholder="Tag" {...register(`tags.${index}`)} className="flex-1" />
              <RemoveButton onClick={() => removeTag(index)}>
                <MdDelete />
              </RemoveButton>
            </div>
          ))}
          <AddButton onClick={() => appendTag('')}>
            <FaPlus />
          </AddButton>
        </FieldContainer>

        <FieldContainer>
          <SectionTitle>Steps</SectionTitle>
          {steps.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <Input type="text" placeholder={`Step ${index + 1}`} {...register(`steps.${index}.text`)} className="flex-1" />
              <RemoveButton onClick={() => removeStep(index)}>
                <MdDelete />
              </RemoveButton>
            </div>
          ))}
          <AddButton onClick={() => appendStep({ text: '' })}>
            <FaPlus />
          </AddButton>
        </FieldContainer>

        <button type="submit" className="bg-accent text-xl rounded-lg py-2 px-4 cursor-pointer hover:bg-accent-alt">
          Add Recipe
        </button>
      </form>

      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage('')} />}
    </>
  );
};

export default AddRecipeForm;
