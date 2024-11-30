import { useSelector } from "react-redux";
import { useGetPizzaQuery } from "../lib/RTKQuery/getProductById";
import { RootState } from "../lib/store";
import ProductItems from "../components/ProductItems";

const CategoryPage = () => {
  const otherData = useSelector((state: RootState) => state.productData.value);
  const { data: other } = useGetPizzaQuery(otherData);
  console.log(otherData);
  return (
    <section className="grid gap-x-4 gap-y-5 -2xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] -md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] -sm-table:grid-cols-1">
      {other
        ? other.map((elem) => (
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
          ))
        : "Loading..."}
    </section>
  );
};

export default CategoryPage;
