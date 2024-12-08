import { sizeChoice } from "@/lib/slices/productState";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

const SizeChoice = () => {
  const dispatch = useDispatch();
  const size = useSelector((state: RootState) => state.productData.size);
  return (
    <div className="container-radio mx-auto mb-4 w-fit self-center">
      <div className="tabs">
        <input
          type="radio"
          id="radio-1"
          name="tabs"
          defaultChecked={size == "25" ? true : false}
          onClick={() => dispatch(sizeChoice("25"))}
        />
        <label className="tab" htmlFor="radio-1">
          25 см
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tabs"
          defaultChecked={size == "30" ? true : false}
          onClick={() => dispatch(sizeChoice("30"))}
        />
        <label className="tab" htmlFor="radio-2">
          30 см
        </label>
        <input
          type="radio"
          id="radio-3"
          name="tabs"
          defaultChecked={size == "35" ? true : false}
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
