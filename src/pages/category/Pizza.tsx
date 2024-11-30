//* State managment TODO

import { Link } from "react-router-dom";
import ProductItems from "../../components/ProductItems";
import Loader from "../../components/Loader";
import { useGetPizzaQuery } from "../../lib/RTKQuery/getProductById";

//? End points!
const PizzaPage = () => {
  const { data: product } = useGetPizzaQuery("pizza");

  return (
    <section className="grid gap-x-4 gap-y-5 -2xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] -md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] -sm-table:grid-cols-1">
      {product ? (
        product.map((elem, index) => (
          <Link to={`/product/${index}`}>
            <ProductItems
              key={elem.id}
              id={elem.id}
              imgLink={elem.imgLink}
              title={elem.title}
              price={elem.price}
              piece={elem.piece}
              size={elem.size}
              description={elem.description}
            />
          </Link>
        ))
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default PizzaPage;
