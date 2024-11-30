import Button from "./buttons/Button";
import closeIcon from "../assets/icon-close.png";

const OrderModal = () => {
  return (
    <section className="absolute left-2/4 top-2/4 z-20 grid h-full w-full -translate-x-2/4 -translate-y-2/4 place-content-center bg-slate-500 bg-opacity-30">
      <div className="">
        <form className="flex max-w-80 flex-col gap-2 rounded-3xl bg-white p-5 [&>label]:relative">
          <img src={closeIcon} alt="Закрыть" className="ml-auto size-8" />
          <p className="text-center text-2xl font-semibold text-orange-500">
            Новый адрес
          </p>
          <label>
            <input
              placeholder="Город, улица и дом"
              type="email"
              className="w-full rounded-xl border-2 p-4 outline-0"
            />
          </label>
          <label>
            <input
              placeholder="Номер телефона"
              type="email"
              className="w-full rounded-xl border-2 p-4 outline-0"
            />
          </label>
          <div className="flex w-full gap-2">
            <label>
              <input
                placeholder="Подъезд"
                type="text"
                className="w-full rounded-xl border-2 p-4 outline-0"
              />
            </label>

            <label>
              <input
                placeholder="Код двери"
                type="text"
                className="w-full rounded-xl border-2 p-4 outline-0"
              />
            </label>
          </div>
          <div className="flex w-full gap-2">
            <label>
              <input
                placeholder="Этаж"
                type="text"
                className="w-full rounded-xl border-2 p-4 outline-0"
              />
            </label>

            <label>
              <input
                placeholder="Квартира"
                type="text"
                className="w-full rounded-xl border-2 p-4 outline-0"
              />
            </label>
          </div>
          <label>
            <input
              placeholder="Комментарий к адресу"
              type="email"
              className="w-full rounded-xl border-2 p-4 outline-0"
            />
          </label>
          <Button style="py-3 text-lg">Заказать</Button>
        </form>
      </div>
    </section>
  );
};

export default OrderModal;
