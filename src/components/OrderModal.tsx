import Button from "./buttons/Button";

const OrderModal = () => {
  return (
    <section className="absolute w-96 h-96">
      <form className="grid grid-cols-2">
        <label>
          <span className="font-medium">Номер Телефона</span>
          <br />
          <input type="tel" />
        </label>
        <label>
          <span className="font-medium"> Ваш адрес</span>
          <br />
          <input type="tel" />
        </label>
        <Button>Заказать</Button>
      </form>
    </section>
  );
};

export default OrderModal;
