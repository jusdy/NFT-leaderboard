import Button from "components/Button";

interface ItemProps {
  id: number;
  price: number;
}

const NFTItem = (props: ItemProps) => {
  return (
    <div className="flex flex-col justify-between border-[3px] bg-[#25145B] border-theme h-[350px] p-5">
      <p className="text-white text-2xl font-molot tracking-wider">
        #{props.id}
      </p>
      <div className="flex justify-center h-[200px]">
        <img alt="" className=" aspect-square min-w-[100px] h-full" src="assets/rank1.png" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          <img alt="crz" src="assets/icons/crz.svg" />
          <p className="text-xl">{props.price} CRZ</p>
        </div>
        <Button
          className="polyborder-s text-theme font-play lg:text-2xl text-md"
          customClass1="lg:w-[120px] w-[80px] lg:h-[40px] h-[30px] bg-[#AB40FF]"
          customClass2="lg:w-[114px] w-[74px] lg:h-[34px] h-[24px] bg-[#FFFFFF]"
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default NFTItem;
