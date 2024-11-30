import Button from "./buttons/Button";

interface IOrderNumber {
  style?: string;
}

const NumberOfOrders = ({ style }: IOrderNumber) => {
  return (
    <form>
      <label className="flex flex-col [&>span]:mb-1">
        <span className="font-medium">Количество</span>
        <input
          type="number"
          className={`border-2 outline-orange-300 ${style} w-36 rounded-2xl border-orange-300 py-2 text-center`}
        />
      </label>
      <Button style="px-10 py-3 rounded-3xl mt-2 text-white bg-orange-500 ">
        Заказать
      </Button>
    </form>
  );
};

export default NumberOfOrders;
