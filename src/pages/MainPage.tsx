import { RootState } from "../lib/store";
import Combo from "./category/Combo";
import Pizza from "./category/Pizza";
import { useSelector } from "react-redux";
import Snacks from "./category/Snacks";
import Deserty from "./category/Deserty";
import Drinks from "./category/Drinks";
import Sauces from "./category/Sauces";
import KidsLike from "./category/KidsLike";
const MainPage = () => {
  const point = useSelector((state: RootState) => state.productData.value);
  // console.log(point);

  // const { data: pizza } = useGetPizzaQuery(point);
  return (
    <section className=" gap-y-3 gap-x-12 content">
      {point === "pizza" ? <Pizza /> : null}
      {point === "combo" ? <Combo /> : null}
      {point === "snacks" ? <Snacks /> : null}
      {point === "deserty" ? <Deserty /> : null}
      {point === "drinks" ? <Drinks /> : null}
      {point === "sauces" ? <Sauces /> : null}
      {point === "kidsLike" ? <KidsLike /> : null}
    </section>
  );
};

export default MainPage;
