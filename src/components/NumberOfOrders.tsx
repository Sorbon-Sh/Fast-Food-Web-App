import Button from "./buttons/Button";
import { useForm } from "react-hook-form";
import { modalState, sizeFormPizza } from "@/lib/slices/productState";
import { useDispatch } from "react-redux";

interface IOrderNumber {
  style?: string;
}

interface IuseForm {
  pizzaState: number;
}

const NumberOfOrders = ({ style }: IOrderNumber) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<IuseForm>();
  const onSubmit = (data: IuseForm) => {
    dispatch(sizeFormPizza(data.pizzaState));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col [&>label]:mb-1">
        <label className="font-medium">Количество</label>
        <input
          type="number"
          className={`border-2 outline-orange-300 ${style} w-36 rounded-2xl border-orange-300 py-2 text-center`}
          {...register("pizzaState")}
        />
      </div>
      <Button
        style="px-10 py-3 rounded-3xl mt-2 text-white bg-orange-500 "
        handleClick={() => dispatch(modalState(true))}
      >
        Заказать
      </Button>
    </form>
  );
};

export default NumberOfOrders;
