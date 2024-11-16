import { Link } from "react-router-dom";
import ProductItems from "../components/ProductItems";

const Content = () => {
  return (
    <section className=" grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]   gap-y-5 gap-x-4">
      {Array.from(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem, index) => (
          <Link to={`product/${index}`}>
            <ProductItems key={index} />
          </Link>
        ))
      )}
    </section>
  );
};

export default Content;
