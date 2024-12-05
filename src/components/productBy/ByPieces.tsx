import { IDataSupabase } from "@/lib/types/types";
import Button from "@/components/buttons/Button";
import SizeChoice from "@/components/SizeChoice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

interface IProps {
  data: IDataSupabase | undefined;
}

const ByPieces = ({ data }: IProps) => {
  const store = localStorage.getItem("cart");
  const [cartData, setCartData] = useState(store ? JSON.parse(store) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  const cart = async () => {
    if (
      cartData.find((item: IDataSupabase) =>
        data ? item.title === data.title : null,
      )
    ) {
      toast.error("Добавлен", { position: "top-center" });
      return;
    }
    toast.success("Добавлена в корзину", { position: "top-center" });
    const added = [...cartData, ...[data]];
    setCartData(added);
  };

  return (
    <>
      {data?.piece ? (
        <div className="flex flex-col justify-between">
          <div className="bg-gray-300 p-4 text-center">{data?.piece}шт</div>
          <div>
            <Button>Заказать</Button>
            <Button handleClick={cart}>В Корзину</Button>
          </div>
        </div>
      ) : data?.size ? (
        <div>
          <div className="bg-gray-300 p-4 text-center">{data?.size}</div>
          <div>
            <Button>Заказать</Button>
            <Button handleClick={cart}>В Корзину</Button>
          </div>
        </div>
      ) : (
        <SizeChoice />
      )}
    </>
  );
};

export default ByPieces;
