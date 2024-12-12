import { useGetProductQuery } from "@/lib/RTKQuery/getProductById";
import { useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import { RootState } from "@/lib/store";
import ByPieces from "@/components/productBy/ByPieces";
import BySize from "@/components/productBy/BySize";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const productCategory = sessionStorage.getItem("state");
  const size = useSelector((state: RootState) => state.productData.size);

  // Fetch product data based on the category
  const { data: productById } = useGetProductQuery(productCategory || "pizza");

  // Get the specific product data by ID
  const data = productById && productById[Number(id)];

  // Initialize cart data from localStorage
  const storeCart = localStorage.getItem("cart");
  const [cartData, setCartData] = useState(
    storeCart ? JSON.parse(storeCart) : [],
  );

  //* Тот же самый метод который проходили
  // Function to add product to cart
  const addToCart = () => {
    if (data) {
      const productToAdd = {
        id: data.id,
        title: data.title,
        imgLink: data.imgLink,
        //* priceObject изначально нужно было создавать отдельно в Базы данных
        priceObj: data.price[size] || null, // Get the price based on the selected size
        price: typeof data.price === "object" ? null : data.price, // Assuming basePrice is a string
      };

      // if (cartData.find((elem: IDataSupabase) => elem.price === data.price)) {
      //   toast.error("Уже добавлено");
      //   return;
      // }

      // if (
      //   cartData.find(
      //     (elem: IDataSupabase) => elem.priceObj === data.price[size],
      //   )
      // ) {
      //   toast.error("Уже добавлено");
      //   return;
      // }

      toast.success("Добавлено в корзину");

      // Update cart data
      const updatedCart = [...cartData, productToAdd];
      setCartData(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
      console.log(`Product ${data.id} added to cart.`);
    }
  };

  // Effect to synchronize cart data with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <section className="content">
      {productById ? (
        <article className="grid h-96 grid-cols-2 grid-rows-1 -lg:h-auto -lg:grid-cols-1">
          <div className="row-start-1 row-end-2 grid place-content-center -lg:row-start-2">
            <img
              src={data?.imgLink}
              alt=""
              //? Если есть объекты данных из питцы и Если size равен размерам, тогда изменить размер
              className={`object-contain ${data?.price["25"] ? size === "25" && "size-80 -sm:size-72 -xs-mobile:size-64 -sm-mobile:size-60" : null} ${data?.price["30"] ? size === "30" && "size-96 -sm:size-80 -xs-mobile:size-72 -sm-mobile:size-64" : null} ${data?.price["35"] ? size === "35" && "size-[28rem] -sm:size-96 -xs-mobile:size-80 -sm-mobile:size-72" : null} ${productCategory !== "pizza" && "size-96"} transition-all`}
            />
          </div>
          <div className="flex justify-between -xl:flex-col -lg:mb-3 -sm-table:flex-col -sm-table:text-center">
            <div className="flex flex-col px-3 pl-5 -xl:pb-3 -sm-table:p-0">
              <h4 className="mb-4 text-3xl">{data?.title}</h4>
              <span className="mb-6 text-2xl">
                {data?.price[size] || data?.price}
                <sup className="ml-1 text-sm">SM</sup>
              </span>
              <span>{data?.description}</span>
            </div>

            <div className="flex h-fit flex-col rounded-md border-2 -sm-table:my-5">
              {/* 
              //? Если у продукта нет изменение размера то показовать размер по (количеству или по литру)
               */}
              <ByPieces data={data} />
              <div className="w-72 text-center -xl:w-full -sm-table:w-full -sm-table:p-0">
                {/* 
                //? Если есть данные по количеству или по литру то, скрыть функционал изменение размера питцы
                 */}
                <BySize data={data} handleClick={addToCart} />
              </div>
            </div>
          </div>
        </article>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default ProductDetailsPage;
