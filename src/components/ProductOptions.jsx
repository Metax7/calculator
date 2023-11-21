export default function ProductOptions({ optionName, handleChangeOptions }) {
  return (
    <>
      {Object.keys(optionName).map((option) => (
        <label
          key={option}
          htmlFor={option}
          className="border rounded-md py-2 px-4"
        >
          <input
            id={option}
            type="checkbox"
            onChange={() => handleChangeOptions(option)}
            className="mr-1"
          />
          {`${option}: $${optionName[option]}`}
        </label>
      ))}
    </>
  );
}
