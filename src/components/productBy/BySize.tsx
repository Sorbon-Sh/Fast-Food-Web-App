import { IDataSupabase } from "@/lib/types/types";
import NumberOfOrders from "@/components/NumberOfOrders";

interface IProps {
  data: IDataSupabase | undefined;
}

const BySize = ({ data }: IProps) => {
  return (
    <>
      <div className="w-72 text-center -xl:w-full -sm-table:w-full -sm-table:p-0">
        {data?.piece || data?.size ? null : (
          <div>
            <span>Доставка:</span>
            <span className="pl-1 font-medium text-green-500">30 мин</span>
            <NumberOfOrders style="mx-auto" />
          </div>
        )}
      </div>
    </>
  );
};

export default BySize;
