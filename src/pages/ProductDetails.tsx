import NumberOfOrders from "../components/NumberOfOrders";

const ProductDetails = () => {
  return (
    <section className="content">
      <article className="grid grid-cols-2 grid-rows-2">
        <div className="row-start-1 row-end-3 text-center">Image</div>
        <div className=" px-8 ">
          <div className="title__section flex flex-col">
            <h4 className="text-3xl">Title</h4>
            <span className="text-2xl">
              Price<sup className="text-sm">SM</sup>
            </span>
            <span>Description</span>
          </div>
          <div className="border-2 rounded-md">
            <div className="w-[293px] h-[221px] ">
              <span>Доставка:</span>
              <span className="text-green-500 font-medium">1 час</span>
              <NumberOfOrders />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
