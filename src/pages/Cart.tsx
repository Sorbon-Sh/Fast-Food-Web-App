import Button from "../components/buttons/Button";
import deleteIcon from "../assets/icon-close.png";
import { IDataSupabase } from "@/lib/types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { modalState } from "@/lib/slices/productState";
import { useEffect, useState } from "react";

// Example with responsive -lg:[&>*]:text-center,
// Минус такого подхода в том что пробелы нужно делать в нижнем почеркивании (_) в квадратных скобках
// Иначе работать не будет
// -lg:[&>article+div]:text-center  -lg:[&>*]:text-center
// -lg:[&>article:nth-child()]:text-center and e,t,c

// Можно делать так:
//  1) -lg:[&>*:nth-child()]: и написать так несколь что не было длинно для пробелов
//  2) написать свой @layer components и добавить .nameClass{ @applay стили tailwindcss... } и целом сокрашение классов в JSX

const CartPage = () => {
  const [cartFromLS, setCartFromLS] = useState<IDataSupabase[] | null>(
    JSON.parse(localStorage.getItem("cart") || ""),
  );
  const size = useSelector((state: RootState) => state.productData.size);
  const dispatch = useDispatch();

  const del = (index: number) => {
    if (cartFromLS) {
      setCartFromLS(cartFromLS.splice(index, 1));
      console.log(index);

      localStorage.setItem("cart", JSON.stringify(cartFromLS));
    }
  };

  useEffect(() => {
    setCartFromLS(JSON.parse(localStorage.getItem("cart") || ""));
  }, [cartFromLS]);

  return (
    <section className="content grid grid-cols-1">
      <h1 className="mb-20 text-center text-4xl font-medium">Корзина</h1>
      <div className="mb-5 flex -md:justify-between">
        <span className="self-center text-xl font-medium [&>span]:ml-2">
          Итог:
          <span>100</span>
        </span>
        <Button style="ml-10 px-5 py-3 -md:ml-0">Заказать все</Button>
      </div>

      {cartFromLS && cartFromLS.length !== 0 ? (
        cartFromLS.map((cartElem, index) => (
          <article key={cartElem.id} className="my-3 border-2">
            <img
              src={deleteIcon}
              alt="Удалить"
              className="ml-auto w-14 cursor-pointer p-2"
              onClick={() => del(index)}
            />
            <div className="flex min-h-40 justify-between -lg:flex-col -lg:gap-y-5 [&>*]:w-96 -lg:[&>*]:w-full -lg:[&>*]:text-center">
              <div className="">
                <img src={cartElem.imgLink} alt="" className="mx-auto" />
              </div>
              <div className="px-3">
                <span className="mb-2 text-xl">{cartElem.title}</span>
                <div className="mb-2 mt-1">
                  {cartElem.price[size] || cartElem.price},00 см
                </div>
                {cartElem.description}
              </div>
              <div>
                {/* useRef */}
                <input
                  type="number"
                  className="rounded-xl bg-gray-200 p-3"
                  placeholder="Количество"
                />
                <Button
                  style="py-3 ml-3 px-8"
                  handleClick={() => dispatch(modalState(true))}
                >
                  Заказать
                </Button>
              </div>
            </div>
          </article>
        ))
      ) : (
        <div className="flex h-52 items-center justify-center border-2 text-center text-3xl">
          <span>Ваша корзина пуста</span>
        </div>
      )}
    </section>
  );
};

export default CartPage;
