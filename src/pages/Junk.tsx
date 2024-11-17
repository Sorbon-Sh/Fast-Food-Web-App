import NumberOfOrders from "../components/NumberOfOrders";

const Junk = () => {
  return (
    <section className="content grid grid-cols-1 grid-rows-2">
      <h1 className="text-center font-medium text-4xl">Корзина</h1>
      <article
        className=" min-h-40 flex justify-between  border-2 
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
      </article>
    </section>
  );
};

export default Junk;
