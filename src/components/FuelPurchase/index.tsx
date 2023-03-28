import Modal from "react-modal";
import Button from "components/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#283749",
    padding: "50px 80px 50px 50px",
  },
};

interface PurchaseProps {
  isOpen: boolean;
  onClose: () => void;
}

const FuelPurchase = ({ isOpen = false, onClose }: PurchaseProps) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById('root') as HTMLElement}
      >
        <button
          className="absolute top-0 right-0 bg-theme w-[50px] h-[50px] flex justify-center items-center"
          onClick={onClose}
        >
          <img alt="" src="assets/icons/close.svg" />
        </button>

        <div className="sm:block flex flex-wrap gap-x-6">
          <div className="flex gap-x-4 mb-[50px]">
            <img alt="" src="assets/icons/fuelbox2.svg" />
            <div className="flex flex-col">
              <p className="text-white font-molot lg:text-3xl text-xl tracking-widest">
                fill tank-nft 121
              </p>
              <p className="text-[#1271FF] lg:text-xl text-lg lg:font-normal font-bold">1 tank = 5 races</p>
            </div>
          </div>

          <Button
            className="flex gap-x-4 py-[10px]"
            customClass1="lg:w-[250px] w-[150px] lg:h-[60px] h-[40px] bg-[#8840FF]"
            customClass2="lg:w-[244px] w-[144px] lg:h-[54px] h-[34px] bg-[#AB40FF]"
            mb={30}
          >
            <p className="font-play text-white lg:text-2xl text-md">1 Tank = 10 CRZ</p>
          </Button>

          <div>
            <Button
              className="flex gap-x-4 py-[10px]"
              customClass1="lg:w-[250px] w-[150px] lg:h-[60px] h-[40px] bg-[#8840FF]"
              customClass2="lg:w-[244px] w-[144px] lg:h-[54px] h-[34px] bg-[#AB40FF]"
              mb={10}
            >
              <p className="font-play text-white lg:text-2xl text-md">2 Tanks = 18 CRZ</p>
            </Button>
            <p className="text-[#1271FF] lg:text-xl text-md mb-[20px]">10% discounted</p>
          </div>

          <div>
            <Button
              className="flex gap-x-4 py-[10px]"
              customClass1="lg:w-[250px] w-[150px] lg:h-[60px] h-[40px] bg-[#8840FF]"
              customClass2="lg:w-[244px] w-[144px] lg:h-[54px] h-[34px] bg-[#AB40FF]"
              mb={10}
            >
              <p className="font-play text-white lg:text-2xl text-md">4 Tanks = 32 CRZ</p>
            </Button>
            <p className="text-[#1271FF] lg:text-xl text-md mb-[20px]">20% discounted</p>
          </div>
        </div>


        <img
          alt=""
          src="assets/fuel.png"
          className="absolute bottom-0 right-0 -z-[1]"
        />
      </Modal>
    </div>
  );
};

export default FuelPurchase;
