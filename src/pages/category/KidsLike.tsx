//* State managment TODO

import { Link } from "react-router-dom";
import ProductItems from "../../components/ProductItems";
import Loader from "../../components/Loader";
import { useGetCategoryQuery } from "../../lib/RTKQuery/getProductById";

//? End points!
const KidsPage = () => {
  const { data: product } = useGetCategoryQuery("kidsLike");

  return (
    <section className="grid gap-x-4 gap-y-5 -2xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] -md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] -sm-table:grid-cols-1">
      {product ? (
        product.map((elem, index) => (
          <div key={elem.id}>
            <Link to={`/product/${index}`}>
              <ProductItems
                id={elem.id}
                imgLink={elem.imgLink}
                title={elem.title}
                price={elem.price}
                piece={elem.piece}
                size={elem.size}
                description={elem.description}
              />
            </Link>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default KidsPage;
