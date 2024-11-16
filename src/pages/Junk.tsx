import NumberOfOrders from "../components/NumberOfOrders";

const Junk = () => {
  return (
    <section className="content grid grid-cols-1 grid-rows-2 px-5">
      <h1 className="text-center font-medium text-4xl">Корзина</h1>
      <article className="col-span-1 row-span-1 min-h-40 flex justify-between">
        <div className="item__card w-96">Image</div>
        <div className="w-96">Description</div>
        <div className="w-96">
          <NumberOfOrders />
        </div>
      </article>
    </section>
  );
};

export default Junk;
