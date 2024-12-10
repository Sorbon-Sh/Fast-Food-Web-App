import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetCategoryQuery } from "@/lib/RTKQuery/getProductById";

function Responsive() {
  const { data: oftenOrders } = useGetCategoryQuery("ofter-orders");
  const settings = {
    dots: false,

    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 758,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <article className="">
      <div className="mb-10 text-2xl text-orange-500">Частые заказы</div>
      <div className="slider-container outline-none">
        <Slider {...settings}>
          {oftenOrders &&
            oftenOrders.map((elem) => (
              <div className="text-center">
                <img src={elem.imgLink} className="mx-auto size-56" />
                <div className="font-medium">{elem.title}</div>
                <div>от {elem.price},00 с</div>
              </div>
            ))}
        </Slider>
      </div>
    </article>
  );
}

export default Responsive;
