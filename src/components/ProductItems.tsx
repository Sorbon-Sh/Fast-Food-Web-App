import { IDataSupabase } from "@/lib/types/types";

const ProductItems = ({
  imgLink,
  title,
  price,
  description,
}: IDataSupabase) => {
  return (
    <div className="flex h-full transform flex-col rounded-lg bg-white p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
      <img
        className="w-auto rounded-t-lg object-contain -lg:h-52 -sm-table:h-72 -sm-mobile:h-52"
        alt="Card Image"
        src={imgLink}
      />

      <div className="flex h-full flex-col justify-between p-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-black">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
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
