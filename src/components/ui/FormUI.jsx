export const FieldContainer = ({ children }) => (
  <div className="flex flex-col gap-2 rounded-lg max-w-full">{children}</div>
);

export const SectionTitle = ({ children }) => (
  <h4 className="font-medium text-lg text-light">{children}</h4>
);

export const AddButton = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-accent text-xl text-light-alt rounded-lg py-2 px-4 w-fit shadow-md cursor-pointer hover:bg-accent-alt transition duration-300"
  >
    {children}
  </button>
);

export const RemoveButton = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-red-400  text-2xl text-light-alt rounded-lg py-1 px-3 w-fit shadow-md cursor-pointer hover:bg-red-500 transition duration-300"
  >
    {children}
  </button>
);
