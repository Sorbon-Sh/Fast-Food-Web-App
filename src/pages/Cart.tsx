import Button from "../components/buttons/Button";
import deleteIcon from "../assets/delete.png";
import { IDataSupabase } from "@/lib/types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

// Example with responsive -lg:[&>*]:text-center,
// Минус такого подхода в том что пробелы нужно делать в нижнем почеркивании (_) в квадратных скобках
// Иначе работать не будет
// -lg:[&>article+div]:text-center  -lg:[&>*]:text-center
// -lg:[&>article:nth-child()]:text-center and e,t,c

// Можно делать так:
//  1) -lg:[&>*:nth-child()]: и написать так несколь что не было длинно для пробелов
//  2) написать свой @layer components и добавить .nameClass{ @applay стили tailwindcss... } и целом сокрашение классов в JSX

const CartPage = () => {
  const cartData: IDataSupabase[] = JSON.parse(
    //? Принамаем данные JSON, либо что-то прийдет, либо пустой массив в JSON
    localStorage.getItem("cart") || "[]",
  );
  const size = useSelector((state: RootState) => state.productData.size);

  const removeItem = (index) => {
    // Создаем новый массив без элемента с указанным индексом
    const newData = [...cartData.slice(0, index), ...cartData.slice(index + 1)];
    setData(newData); // Обновляем состояние
  };

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

      {cartData.length !== 0 ? (
        cartData.map((cartElem) => (
          <article className="my-3 border-2">
            <img
              src={deleteIcon}
              alt="Удалить"
              className="ml-auto w-14 cursor-pointer p-2"
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
