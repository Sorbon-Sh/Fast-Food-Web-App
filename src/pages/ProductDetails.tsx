import NumberOfOrders from "../components/NumberOfOrders";

const ProductDetails = () => {
  return (
    <section className="content">
      <article className="grid grid-cols-2 grid-rows-2 -lg:grid-cols-1 ">
        <div className="row-start-1 row-end-3 text-center -lg:row-start-2">
          Image
        </div>
        <div className=" flex justify-between -sm-table:flex-col -sm-table:text-center">
          <div className=" flex flex-col pl-5 -sm-table:p-0">
            <h4 className="text-3xl mb-4">Title</h4>
            <span className="text-2xl mb-6">
              Price<sup className="text-sm">SM</sup>
            </span>
            <span>Description</span>
          </div>
          <div className="border-2 rounded-md -sm-table:my-5">
            <div className="w-72 pl-9 -sm-table:p-0 -sm-table:w-full">
              <span>Доставка:</span>
              <span className="text-green-500 font-medium pl-1">1 час</span>
              <NumberOfOrders style="-sm-table:mx-auto" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
