const AddFormPreview = ({ data }) => {
  if (!data) return null;

  return (
    <div className="relative bg-primary text-dark p-[30px] rounded-[30px] overflow-hidden w-100 h-full">
      {data.image ? (
        <img
          src={data.image}
          alt={data.title || 'Recipe'}
          className="absolute top-0 left-0 w-full h-[318px] object-cover z-0"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-[318px] bg-primary-alt-alt flex items-center justify-center z-0"></div>
      )}

      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.71) 1%, rgba(255, 255, 255, 0) 40%)',
        }}
      />

      <div className="relative z-20 bg-light p-[30px] rounded-[30px] mt-[218px] flex flex-col h-[calc(100%-218px-30px)] overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4 break-words">{data.title || ''}</h2>
        <p className="text-dark/44 text-lg font-medium mb-7.5 break-words">
          {data.description || ''}
        </p>

        {data.ingredients && data.ingredients.length > 0 && (
          <>
            <h3 className="font-medium text-lg mb-2">Ingredients:</h3>
            <ul className="mb-5 break-words">
              {data.ingredients && data.ingredients.length > 0 ? (
                data.ingredients.map((ing, index) =>
                  ing.name || ing.quantity ? (
                    <li
                      key={index}
                      className="font-medium text-lg text-dark/63 flex justify-between break-words"
                    >
                      <span>{ing.name || '...'}</span>
                      <span>{ing.quantity}</span>
                    </li>
                  ) : null
                )
              ) : (
                <li className="font-medium text-lg"></li>
              )}
            </ul>
          </>
        )}

        {data.steps && data.steps.length > 0 && (
          <>
            <h3 className="font-medium text-lg mb-2">Steps:</h3>
            <ol className="list-decimal list-inside mb-5 break-words overflow-auto">
              {data.steps.map((s, index) =>
                s.text ? (
                  <li key={index} className="font-medium text-lg text-dark/63 mb-2 break-words">
                    {s.text}
                  </li>
                ) : null
              )}
            </ol>
          </>
        )}

        {data.tags && data.tags.length > 0 && (
          <>
            <h3 className="font-medium text-lg mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2 mb-5 break-words">
              {data.tags.map(
                (t, index) =>
                  t && (
                    <span
                      key={index}
                      className="bg-accent text-white px-3 py-1 rounded-full text-sm break-words"
                    >
                      {t}
                    </span>
                  )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddFormPreview;
