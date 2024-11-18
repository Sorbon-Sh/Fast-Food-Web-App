const SizeChoice = () => {
  return (
    <div className="container-radio  w-fit self-center mb-5">
      <div className="tabs">
        <input type="radio" id="radio-1" name="tabs" defaultChecked />
        <label className="tab" htmlFor="radio-1">
          25 см
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label className="tab" htmlFor="radio-2">
          30 см
        </label>
        <input type="radio" id="radio-3" name="tabs" />
        <label className="tab" htmlFor="radio-3">
          35 см
        </label>
        <span className="glider" />
      </div>
    </div>
  );
};

export default SizeChoice;
