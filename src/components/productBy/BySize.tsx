import { IDataSupabase } from "@/lib/types/types";
import Button from "../buttons/Button";
import { useDispatch } from "react-redux";

import SizeChoice from "../SizeChoice";
import { modalState } from "@/lib/slices/productState";

interface IProps {
  data: IDataSupabase | undefined;
  handleClick: () => void;
}

const BySize = ({ data, handleClick }: IProps) => {
  const stateCategory = sessionStorage.getItem("state");

  const dispatch = useDispatch();
  return (
    <>
      <div className="w-72 py-4 text-center -xl:w-full -sm-table:w-full -sm-table:p-0">
        {data?.piece || data?.size
          ? null
          : stateCategory === "pizza" && (
              <div className="pb-1">
                <div>
                  <SizeChoice />
                  <span>Доставка:</span>
                  <span className="pl-1 font-medium text-green-500">
                    30 мин
                  </span>
                </div>

                <Button
                  style="px-8 py-3 mt-8"
                  handleClick={() => dispatch(modalState())}
                >
                  Заказать
                </Button>
                <Button handleClick={handleClick} style="px-8 py-3 mt-8">
                  В корзину
                </Button>
              </div>
            )}

        {stateCategory !== "pizza" ? (
          <div className="mx-auto mt-5 flex w-fit flex-col gap-y-2">
            <Button
              style="px-8 py-3 "
              handleClick={() => dispatch(modalState())}
            >
              Заказать
            </Button>
            <Button style="px-8 py-3 " handleClick={handleClick}>
              В карзину
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default BySize;
