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
    padding: "50px 80px 50px 50px"
  },
};

interface PurchaseProps {
    isOpen: boolean;
    onClose: () => void;
}

const FuelPurchase = ({
    isOpen=false,
    onClose
}: PurchaseProps) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="absolute top-0 right-0 bg-theme w-[50px] h-[50px] flex justify-center items-center" onClick={onClose}>
            <img src="assets/icons/close.svg"/>
        </button>

        <div className="flex gap-x-4 mb-[50px]">
            <img src="assets/icons/fuelbox2.svg"/>
            <div className="flex flex-col">
                <p className="text-white font-molot text-3xl tracking-widest">fill tank-nft 121</p>
                <p className="text-[#1271FF] text-xl">1 tank = 5 races</p>
            </div>
        </div>

        <Button width={250} height={60} className="flex gap-x-4 py-[10px] hover:bg-white" bg1="#8840FF" bg2="#AB40FF" mb={30}>
            <p className="font-play text-white text-2xl">1 Tank = 10 CRZ</p>
        </Button>

        <Button width={250} height={60} className="flex gap-x-4 py-[10px] hover:bg-white" bg1="#8840FF" bg2="#AB40FF" mb={10}>
            <p className="font-play text-white text-2xl">2 Tanks = 18 CRZ</p>
        </Button>
        <p className="text-[#1271FF] text-xl mb-[20px]">10% discounted</p>

        <Button width={250} height={60} className="flex gap-x-4 py-[10px] hover:bg-white" bg1="#8840FF" bg2="#AB40FF" mb={10}>
            <p className="font-play text-white text-2xl">4 Tanks = 32 CRZ</p>
        </Button>
        <p className="text-[#1271FF] text-xl mb-[20px]">20% discounted</p>

        <img src="assets/fuel.png" className="absolute bottom-0 right-0 -z-[1]"/>

      </Modal>
    </div>
  );
};

export default FuelPurchase;
