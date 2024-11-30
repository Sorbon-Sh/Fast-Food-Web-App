import NumberOfOrders from "../components/NumberOfOrders";
import SizeChoice from "../components/SizeChoice";

const ProductDetailsPage = () => {
  return (
    <section className="content">
      <article className="grid grid-cols-2 grid-rows-2 -lg:grid-cols-1">
        <div className="row-start-1 row-end-3 text-center -lg:row-start-2">
          Image
        </div>
        <div className="flex justify-between -xl:flex-col -sm-table:flex-col -sm-table:text-center">
          <div className="flex flex-col pl-5 -xl:pb-3 -sm-table:p-0">
            <h4 className="mb-4 text-3xl">Title</h4>
            <span className="mb-6 text-2xl">
              Price<sup className="text-sm">SM</sup>
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, ex!
            </span>
          </div>

          <div className="flex flex-col rounded-md border-2 -sm-table:my-5">
            <SizeChoice />
            <div className="w-72 text-center -xl:w-full -sm-table:w-full -sm-table:p-0">
              <span>Доставка:</span>
              <span className="pl-1 font-medium text-green-500">1 час</span>
              <NumberOfOrders style="mx-auto" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetailsPage;
