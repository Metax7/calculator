export default function Products({productName, secondProductName, changeMerc, changeBmw }) {
  return (
    <>
      <label htmlFor="firstProduct" className="border rounded-md py-2 px-4">
        <input
          type="radio"
          id="mercedes"
          name="car"
          onChange={changeMerc}
          className="mr-1"
        />
        {productName}
      </label>
      <label htmlFor="secondProduct" className="border rounded-md py-2 px-4">
        <input
          type="radio"
          id="bmw"
          name="car"
          onChange={changeBmw}
          className="mr-1"
        />
        {secondProductName}
      </label>
    </>
  );
}
