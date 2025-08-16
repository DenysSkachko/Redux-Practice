import { useNavigate } from 'react-router-dom';

const PageTitle = ({ title, showButton, buttonText, buttonIcon, onAddClick, buttonLink }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onAddClick) {
      onAddClick();
    } else if (buttonLink) {
      navigate(buttonLink);
    }
  };

  return (
    <div className="flex justify-between items-center mb-15 gap-10">
      <h1 className="font-bold text-4xl text-primary-alt uppercase">{title}</h1>
      {showButton && (
        <button
          onClick={handleClick}
          className="text-primary-alt flex gap-6 items-center cursor-pointer"
        >
          <img src={buttonIcon} alt="" width={30} height={30} />
          <p className="text-2xl">{buttonText}</p>
        </button>
      )}
    </div>
  );
};

export default PageTitle;
