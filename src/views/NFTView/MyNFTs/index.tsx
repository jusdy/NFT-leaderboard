import { useState } from 'react';
import NFTStats from './NFTStats';
import ButtonBar from './ButtonBar';
import FuelPurchase from 'components/FuelPurchase';
import PieChart from "components/PieChart";
import RarityBar from 'components/RarityBar';

const MyNFTs = () => {
  const [isFuelPurchase, setFuelPurchase] = useState<boolean>(false);

  return (
    <div className="flex flex-col border-[3px] border-theme w-full h-full">
      <FuelPurchase isOpen={isFuelPurchase} onClose={() => setFuelPurchase(false)}></FuelPurchase>
      <div className="flex xl:flex-row flex-col w-full xl:h-[calc(100vh-150px)] h-fit xl:order-1 order-2">
        <NFTStats onFuelClick={() => setFuelPurchase(true)}
        position={7}
        earning={165}
        points={3000}
        peakPrice={1.255}
        peakPosition={2}
        trophy={2}
        />

        <div className="flex flex-col w-full bg-transparent xl:order-2 order-1"> {/* bg-gradient-radial from-[#264189FF] via-[#090314] to-[#090314] */}
          <div className="flex items-center md:px-[50px] px-[20px] justify-between w-full sm:h-[80px] h-[50px]">
            <div className="">
              <span className="font-bold md:text-4xl text-2xl">#53</span>
              <span className="text-lg"> ID</span>
            </div>

            <div className="flex gap-x-[20px] items-center">
              <img alt="" src="assets/icons/token.svg" />
              <div>
                <label className="font-bold md:text-4xl text-2xl">3.25 </label>
                <label className="text-lg">CRZ</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full w-full py-[40px] md:px-[100px] px-[25px]">
            {/* <div className="w-full h-[3px] mb-5 bg-white shadow-[0_0_8px_1px_rgba(18,113,255,1)] rounded-full " /> */}
            <div className="flex justify-between">
              <PieChart value={33} title={"Speed"} />
              <PieChart value={36} title={"Acceleration"} />
              <PieChart value={16} title={"Handling"} />
              <RarityBar value={1}/>
            </div>
            <div className="grow mt-4 h-full">
              <img alt='' className='m-auto w-[400px]' src={""}></img>
            </div>
          </div>
          <ButtonBar className='xl:flex hidden'/>
        </div>
        
        <ButtonBar className='xl:hidden flex order-3'/>
      </div>


    </div>
  );
};

export default MyNFTs;
