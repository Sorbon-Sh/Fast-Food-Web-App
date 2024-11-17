import Button from "./buttons/Button";

interface IOrderNumber {
  style?: string;
}

const NumberOfOrders = ({ style }: IOrderNumber) => {
  return (
    <form>
      <label className="flex flex-col">
        <span className="font-medium">Количество</span>
        <input
          type="number"
          className={`outline-orange-300 border-2 ${style} border-orange-300 w-36 py-2 text-center rounded-2xl`}
        />
      </label>
      <Button style="px-11 py-3 rounded-3xl mt-3 text-white bg-orange-500">
        Заказать
      </Button>
    </form>
  );
};

export default NumberOfOrders;
