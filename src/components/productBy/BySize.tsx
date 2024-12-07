import { IDataSupabase } from "@/lib/types/types";
import NumberOfOrders from "@/components/NumberOfOrders";
import Button from "../buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import SizeChoice from "../SizeChoice";
import { modalState } from "@/lib/slices/productState";

interface IProps {
  data: IDataSupabase | undefined;
  handleClick: () => void;
}

const BySize = ({ data, handleClick }: IProps) => {
  const pizza = useSelector((state: RootState) => state.productData.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-72 text-center -xl:w-full -sm-table:w-full -sm-table:p-0">
        {data?.piece || data?.size
          ? null
          : pizza == "pizza" && (
              <div>
                <SizeChoice />
                <span>Доставка:</span>
                <span className="pl-1 font-medium text-green-500">30 мин</span>
                <NumberOfOrders
                  style="mx-auto"
                  handleClick={dispatch(modalState(true))}
                />
                <Button handleClick={handleClick} style="px-8 py-3 mt-2">
                  В корзину
                </Button>
              </div>
            )}

        {pizza !== "pizza" ? (
          <div className="mx-auto mt-5 flex w-fit flex-col gap-y-2">
            <Button
              style="px-8 py-3 "
              handleClick={() => dispatch(modalState(true))}
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
