import { useGetProductQuery } from "../RTKQuery/getProductById";

const useGetProductById = () => {
  const productCategory = sessionStorage.getItem("state");
  const { data: product } = useGetProductQuery(productCategory || "pizza");

  if (!product) return;

  const [data] = product;

  return data;
};

export default useGetProductById;
