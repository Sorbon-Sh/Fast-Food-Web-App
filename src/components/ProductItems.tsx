import { IDataSupabase } from "@/lib/types/types";

const ProductItems = ({
  imgLink,
  title,
  price,
  description,
}: IDataSupabase) => {
  return (
    <div className="flex h-full transform flex-col rounded-lg bg-white p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 -sm-table:h-[410px]">
      <img
        className="w-auto rounded-t-lg object-contain -lg:h-52 -sm-table:h-72 -sm-mobile:h-52"
        alt="Card Image"
        src={imgLink}
      />

      <div className="flex h-full flex-col justify-between p-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-black -sm-table:text-sm">
            {title}
          </h2>
          <p className="text-gray-600 -sm-table:overflow-hidden -sm-table:overflow-ellipsis -sm-table:whitespace-nowrap">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between gap-y-2 -sm-table:flex-col">
          <div>{price["25"] || price},00 см</div>
          <button className="rounded-full bg-orange-100 px-4 py-2 text-orange-500 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
