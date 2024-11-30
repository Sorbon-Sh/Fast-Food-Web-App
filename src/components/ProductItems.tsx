import { IDataSupabase } from "../lib/types/types";

const ProductItems = ({
  imgLink,
  title,
  price,
  description,
}: IDataSupabase) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md h-full flex flex-col   transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="w-auto -lg:h-52 object-contain  -sm-table:h-72 -sm-mobile:h-52  rounded-t-lg"
        alt="Card Image"
        src={imgLink}
      />

      <div className="p-4  flex flex-col h-full justify-between">
        <p className="text-gray-600">
          <h2 className="text-xl mb-2 font-semibold text-black">{title}</h2>
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div>{price["25"] || price},00 см</div>
          <button className="bg-orange-100 hover:bg-orange-200 text-orange-500 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
