import { Link } from "react-router-dom";
import ProductItems from "../components/ProductItems";

const Content = () => {
  return (
    <section
      className=" grid 
    -2xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]

    -md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]
    -sm-table:grid-cols-1
     gap-y-5 gap-x-4"
    >
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
