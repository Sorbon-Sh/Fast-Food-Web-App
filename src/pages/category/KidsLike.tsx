//* State managment TODO

import { Link } from "react-router-dom";
import ProductItems from "../../components/ProductItems";
import Loader from "../../components/Loader";
import { useGetCategoryQuery } from "../../lib/RTKQuery/getProductById";
import ContentContainer from "@/components/ContentContainer";

//? End points!
const KidsPage = () => {
  const { data: product } = useGetCategoryQuery("kidsLike");

  return (
    <ContentContainer>
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
    </ContentContainer>
  );
};

export default KidsPage;
