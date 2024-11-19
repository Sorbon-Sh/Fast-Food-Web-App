const ProductItems = () => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-40 -lg:h-52  -sm-table:h-72 -sm-mobile:h-52  object-cover rounded-t-lg"
        alt="Card Image"
        src=""
      />
      <div className="p-4">
        <h2 className="text-xl  font-semibold">Beautiful Card</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          ante sit amet tellus ornare tincidunt.
        </p>
        <div className="flex justify-between items-center mt-4">
          <div>от Цена</div>
          <button className="bg-orange-100 hover:bg-orange-200 text-orange-500 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
