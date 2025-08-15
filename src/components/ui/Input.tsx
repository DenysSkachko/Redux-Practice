const Input = ({ type, placeholder, className = '', ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...props}
      className={`bg-light text-dark rounded-lg px-4 py-2 shadow-md outline-none focus:scale-105 focus:bg-amber-200 transition-all duration-300 ${className}`}
    />
  );
};

export default Input;
