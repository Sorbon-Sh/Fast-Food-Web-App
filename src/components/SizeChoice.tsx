import { sizeChoice } from "@/lib/slices/productState";
import { useDispatch } from "react-redux";

const SizeChoice = () => {
  const dispatch = useDispatch();
  return (
    <div className="container-radio mb-5 w-fit self-center">
      <div className="tabs">
        <input
          type="radio"
          id="radio-1"
          name="tabs"
          onClick={() => dispatch(sizeChoice("25"))}
        />
        <label className="tab" htmlFor="radio-1">
          25 см
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tabs"
          defaultChecked
          onClick={() => dispatch(sizeChoice("30"))}
        />
        <label className="tab" htmlFor="radio-2">
          30 см
        </label>
        <input
          type="radio"
          id="radio-3"
          name="tabs"
          onClick={() => dispatch(sizeChoice("35"))}
        />
        <label className="tab" htmlFor="radio-3">
          35 см
        </label>
        <span className="glider" />
      </div>
    </div>
  );
};

export default SizeChoice;
