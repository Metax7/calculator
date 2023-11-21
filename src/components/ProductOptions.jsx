export default function CarOptions({optionName}) {
  return (
    <>
      <label htmlFor="hitch" className="border rounded-md py-2 px-4">
        <input
          id="hitch"
          type="checkbox"
          onChange={() => handleChangeOptions("towHitch")}
          disabled={!selectedProduct}
          className="mr-1"
        />
        {optionName}
      </label>
    </>
  );
}
