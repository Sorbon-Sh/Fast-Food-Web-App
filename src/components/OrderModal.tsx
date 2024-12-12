import Button from "@/components/buttons/Button";
import closeIcon from "@/assets/icon-close.png";
import { useDispatch, useSelector } from "react-redux";
import { modalState } from "@/lib/slices/productState";
import { RootState } from "@/lib/store";
import { useForm } from "react-hook-form";

const OrderModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.productData.modalState);

  const closeModal = () => {
    dispatch(modalState());
  };

  interface Inputs {
    address: string;
    phone: number;
    entrance: number;
    doorCode: number;
    floor: number;
    apartment: number;
    comment: string;
  }

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const userData = (data: Inputs) => {
    console.log(data);

    reset();
    closeModal();
  };

  return (
    <>
      {modal ? (
        <section
          onClick={closeModal}
          className="fixed left-2/4 top-2/4 z-20 grid w-full -translate-x-2/4 -translate-y-2/4 place-content-center bg-slate-500 bg-opacity-30 -4xl:h-lvh"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <form
              className="flex max-w-80 flex-col gap-2 rounded-3xl bg-white p-5 [&>label]:relative"
              onSubmit={handleSubmit(userData)}
            >
              <img
                src={closeIcon}
                alt="Закрыть"
                className="ml-auto size-8 cursor-pointer"
                onClick={closeModal}
              />
              <p className="text-center text-2xl font-semibold text-orange-500">
                Новый адрес
              </p>
              <label>
                <input
                  placeholder="Город, улица и дом"
                  type="text"
                  className="w-full rounded-xl border-2 p-4 outline-0"
                  {...register("address")}
                />
              </label>
              <label>
                <input
                  placeholder="Номер телефона"
                  type="tel"
                  className="w-full rounded-xl border-2 p-4 outline-0"
                  {...register("phone")}
                />
              </label>
              <div className="flex w-full gap-2">
                <label>
                  <input
                    placeholder="Подъезд"
                    type="number"
                    className="w-full rounded-xl border-2 p-4 outline-0"
                    {...register("entrance")}
                  />
                </label>

                <label>
                  <input
                    placeholder="Код двери"
                    type="text"
                    className="w-full rounded-xl border-2 p-4 outline-0"
                    {...register("doorCode")}
                  />
                </label>
              </div>
              <div className="flex w-full gap-2">
                <label>
                  <input
                    placeholder="Этаж"
                    type="number"
                    className="w-full rounded-xl border-2 p-4 outline-0"
                    {...register("floor")}
                  />
                </label>

                <label>
                  <input
                    placeholder="Квартира"
                    type="number"
                    className="w-full rounded-xl border-2 p-4 outline-0"
                    {...register("apartment")}
                  />
                </label>
              </div>
              <label>
                <input
                  placeholder="Комментарий к адресу"
                  type="text"
                  className="w-full rounded-xl border-2 p-4 outline-0"
                  {...register("comment")}
                />
              </label>
              <Button style="py-3 text-lg" handleClick={() => userData}>
                Заказать
              </Button>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OrderModal;
