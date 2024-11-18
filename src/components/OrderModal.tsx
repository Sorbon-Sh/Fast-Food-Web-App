import Button from "./buttons/Button";
import closeIcon from "../assets/icon-close.png";

const OrderModal = () => {
  return (
    <section
      className="absolute z-20  bg-slate-500 bg-opacity-30 w-full  h-full top-2/4 left-2/4 
    -translate-x-2/4 -translate-y-2/4 grid place-content-center"
    >
      <div className="">
        <form
          className="flex flex-col
         gap-2 max-w-80 bg-white
          p-5 rounded-3xl
         [&>label]:relative 
          "
        >
          <img src={closeIcon} alt="Закрыть" className="size-8 ml-auto" />
          <p className="text-2xl text-orange-500 text-center  font-semibold ">
            Новый адрес
          </p>
          <label>
            <input
              placeholder="Город, улица и дом"
              type="email"
              className="w-full p-4 outline-0 border-2 rounded-xl"
            />
          </label>
          <label>
            <input
              placeholder="Номер телефона"
              type="email"
              className="w-full p-4 outline-0 border-2 rounded-xl"
            />
          </label>
          <div className="flex w-full gap-2">
            <label>
              <input
                placeholder="Подъезд"
                type="text"
                className="w-full p-4 outline-0 border-2 rounded-xl"
              />
            </label>

            <label>
              <input
                placeholder="Код двери"
                type="text"
                className="w-full p-4 outline-0 border-2 rounded-xl"
              />
            </label>
          </div>
          <div className="flex w-full gap-2">
            <label>
              <input
                placeholder="Этаж"
                type="text"
                className="w-full p-4 outline-0 border-2 rounded-xl"
              />
            </label>

            <label>
              <input
                placeholder="Квартира"
                type="text"
                className="w-full p-4 outline-0 border-2 rounded-xl"
              />
            </label>
          </div>
          <label>
            <input
              placeholder="Комментарий к адресу"
              type="email"
              className="w-full p-4 outline-0 border-2 rounded-xl"
            />
          </label>
          <Button style="py-3 text-lg">Заказать</Button>
        </form>
      </div>
    </section>
  );
};

export default OrderModal;
