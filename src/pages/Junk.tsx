import Button from "../components/buttons/Button";
import NumberOfOrders from "../components/NumberOfOrders";
import deleteIcon from "../assets/delete.png";

const Junk = () => {
  return (
    <section className="content grid grid-cols-1">
      <h1 className="text-center font-medium text-4xl mb-20">Корзина</h1>
      <div className="mb-5">
        <span className="font-medium text-xl [&>span]:ml-2">
          Итог:<span>100</span>
        </span>
        <Button style="ml-10">Заказать все</Button>
      </div>
      <article className="border-2 ">
        <img src={deleteIcon} alt="Удалить" className="w-14 p-2 ml-auto" />
        <div
          className=" min-h-40 flex justify-between
      -sm:flex-col
       [&>*]:w-96 
      -sm:[&>*]:w-full
      -sm:[&>*]:text-center
      -sm:gap-y-5
      "
        >
          <div className="">Image</div>
          <div className="">
            <div className="mb-2">Price</div>
            Description
          </div>
          <div className="">
            <NumberOfOrders style="-sm:mx-auto" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Junk;
