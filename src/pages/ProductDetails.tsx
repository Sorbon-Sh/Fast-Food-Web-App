import { useGetProductQuery } from "@/lib/RTKQuery/getProductById";
import { useParams } from "react-router-dom";
import { IDataSupabase } from "@/lib/types/types";
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

  //* Типитизация если productId будет null то явно указать тип данных
  const { data: productById } = useGetProductQuery(productCategory || "pizza");
  //* RTKQuery типитизация
  const data: IDataSupabase | undefined =
    productById && productById[Number(id)];
  //*=====================================
  const storeCart = localStorage.getItem("cart");
  const [cartData, setCartData] = useState(
    storeCart ? JSON.parse(storeCart) : [],
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  const cart = async () => {
    if (
      cartData.find((item: IDataSupabase) =>
        data ? item.title === data.title : null,
      )
    ) {
      toast.error("Добавлен", { position: "top-center" });
      return;
    }
    toast.success("Добавлена в корзину", { position: "top-center" });
    const added = [...cartData, ...[data]];

    setCartData(added);
  };
  console.log(data);

  return (
    <section className="content">
      {productById ? (
        <article className="grid h-96 grid-cols-2 grid-rows-1 -lg:h-auto -lg:grid-cols-1">
          <div className="row-start-1 row-end-2 grid place-content-center -lg:row-start-2">
            <img
              src={data?.imgLink}
              alt=""
              //? Если есть объекты данных из питцы и Если size равен размерам, тогда изменить размер
              className={`object-contain ${data?.price["25"] ? size === "25" && "-xs-mobile:size-64 size-80 -sm:size-72 -sm-mobile:size-60" : null} ${data?.price["30"] ? size === "30" && "-xs-mobile:size-72 size-96 -sm:size-80 -sm-mobile:size-64" : null} ${data?.price["35"] ? size === "35" && "-xs-mobile:size-80 size-[28rem] -sm:size-96 -sm-mobile:size-72" : null} ${productCategory !== "pizza" && "size-96"} transition-all`}
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
                <BySize data={data} handleClick={cart} />
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
