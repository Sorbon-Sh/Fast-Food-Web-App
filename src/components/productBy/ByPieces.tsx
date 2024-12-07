import { IDataSupabase } from "@/lib/types/types";

interface IProps {
  data: IDataSupabase | undefined;
}

const ByPieces = ({ data }: IProps) => {
  return (
    <>
      {data?.piece ? (
        <div className="flex flex-col justify-between">
          <div className="bg-gray-300 p-4 text-center">{data?.piece}шт</div>

          {/* <div className="mt-5 flex justify-center">
            <Button
              style="px-8 py-3"
              handleClick={() => dispatch(modalState(true))}
            >
              Заказать
            </Button>
          </div> */}
        </div>
      ) : (
        data?.size && (
          <div>
            <div className="bg-gray-300 p-4 text-center">{data?.size}</div>

            {/* <div className="mt-5 flex justify-center">
              <Button
                style="px-8 py-3 "
                handleClick={() => dispatch(modalState(true))}
              >
                Заказать
              </Button>
            </div> */}
          </div>
        )
      )}
    </>
  );
};

export default ByPieces;
