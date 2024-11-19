import Button from "../components/buttons/Button";
import NumberOfOrders from "../components/NumberOfOrders";
import deleteIcon from "../assets/delete.png";

// Example with responsive -lg:[&>*]:text-center,
// Минус такого подхода в том что пробелы нужно делать в нижнем почеркивании (_) в квадратных скобках
// Иначе работать не будет
// -lg:[&>article+div]:text-center  -lg:[&>*]:text-center
// -lg:[&>article:nth-child()]:text-center and e,t,c

// Можно делать так:
//  1) -lg:[&>*:nth-child()]: и написать так несколь что не было длинно для пробелов
//  2) написать свой @layer components и добавить .nameClass{ @applay стили tailwindcss... } и целом сокрашение классов в JSX

const Junk = () => {
  return (
    <section className="content grid grid-cols-1">
      <h1 className="text-center font-medium text-4xl mb-20">Корзина</h1>
      <div className="mb-5">
        <span className="font-medium text-xl [&>span]:ml-2">
          Итог:<span>100</span>
        </span>
        <Button style="ml-10 px-5 py-3">Заказать все</Button>
      </div>
      <article className="border-2 ">
        <img src={deleteIcon} alt="Удалить" className="w-14 p-2 ml-auto" />
        <div
          className=" min-h-40 flex justify-between
      -lg:flex-col
       [&>*]:w-96 
      -lg:[&>*]:w-full
      -lg:[&>*]:text-center
      -lg:gap-y-5
      "
        >
          <div className="">Image</div>
          <div className="">
            <div className="mb-2">Price</div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            iure.
          </div>
          <div className="">
            <NumberOfOrders style="-lg:mx-auto" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Junk;
