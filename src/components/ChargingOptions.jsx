export default function ChargingOptions({
  changeWall,
  changeMobile,
  disabled,
}) {
  return (
    <>
      <label htmlFor="wall" className="border rounded-md py-2 px-4">
        <input
          type="radio"
          id="wall"
          name="charging"
          onChange={changeWall}
          disabled={disabled}
          className="mr-1"
        />
        Wall Connector
      </label>
      <label htmlFor="mobile" className="border rounded-md py-2 px-4">
        <input
          id="mobile"
          type="radio"
          name="charging"
          onChange={changeMobile}
          disabled={disabled}
          className="mr-1"
        />
        Mobile Connector
      </label>
    </>
  );
}
