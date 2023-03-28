import { useState } from 'react';
import FuelPurchase from 'components/FuelPurchase';
import Button from "components/Button";
import FuelTank from "components/FuelTank";
import PieChart from "components/PieChart";
import TrophyBadge from "components/TrophyBadge";
import RarityBar from 'components/RarityBar';

const MyNFTs = () => {
  const [isFuelPurchase, setFuelPurchase] = useState<boolean>(false);

  return (
    <div className="flex flex-col border-[3px] border-theme border-t-0 w-full h-full">
      <FuelPurchase isOpen={isFuelPurchase} onClose={() => setFuelPurchase(false)}></FuelPurchase>
      <div className="flex xl:flex-row flex-col w-full xl:h-[calc(100vh-250px)] h-fit">
        <div className="flex xl:flex-nowrap flex-wrap gap-x-8 gap-y-8 px-5 xl:flex-col flex-row xl:items-center items-start overflow-auto scrollbar shrink-0 xl:order-1 order-2 2xl:w-[290px] xl:w-[200px] w-full xl:border-r-[3px] bg-opacity-20 bg-secondary border-theme py-[50px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-xl text-md tracking-widest">Position</h1>
            <label className="text-theme md:text-2xl text-lg font-bold">7</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-xl text-md tracking-widest">Earnings</h1>
            <label className="text-theme md:text-2xl text-lg font-bold">165</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-xl text-md tracking-widest">Points</h1>
            <label className="text-theme md:text-2xl text-lg font-bold">3000</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-xl text-md tracking-widest">Peak Price</h1>
            <label className="text-theme md:text-2xl text-lg font-bold">1.255</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-xl text-md tracking-widest">Peak Position</h1>
            <label className="text-theme md:text-2xl text-lg font-bold">2</label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-xl text-md tracking-widest mb-3">Fuel</h1>
            <FuelTank quantity={2} capacity={4}>

            </FuelTank>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-xl text-md tracking-widest mb-3">Races</h1>
            <img className='sm:w-9 w-6' alt="" src="assets/icons/flag.svg" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-xl text-md tracking-widest mb-5">Trophies</h1>
            <TrophyBadge rank={2} />
          </div>

          <Button
          className1="sm:hidden block"
          className="gap-x-4 py-[10px]"
          customClass1='w-[100px] h-[40px] bg-[#8840FF]'
          customClass2='w-[94px] h-[34px] bg-[#FFFFFF]'
          onClick={() => setFuelPurchase(true)}>
          <img alt="" className="h-full" src="assets/icons/fuelbox.svg"/>
          <div className="font-molot text-[#8840FF] text-xs">
            <p>BUY</p>
            <p>FUEL</p>
          </div>
        </Button>
        </div>

        <div className="flex flex-col w-full bg-transparent xl:order-2 order-1"> {/* bg-gradient-radial from-[#264189FF] via-[#090314] to-[#090314] */}
          <div className="flex items-center md:px-[50px] px-[20px] justify-between w-full sm:h-[80px] h-[50px] bg-theme">
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
              <RarityBar/>
            </div>
            <div className="grow"></div>
          </div>
        </div>
      </div>

      <div className="shrink-0 w-full h-[100px] flex items-center sm:pl-[60px] bg-theme">
        <Button className1="sm:block hidden"
        customClass1='w-[170px] h-[70px] bg-[#8840FF]'
        customClass2='w-[164px] h-[64px] bg-[#FFFFFF]'
        className="gap-x-4 py-[10px]"
        onClick={() => setFuelPurchase(true)}>
          <img alt="" className="h-full" src="assets/icons/fuelbox.svg"/>
          <div className="font-molot text-[#8840FF] text-2xl">
            <p>BUY</p>
            <p>FUEL</p>
          </div>
        </Button>

        <div className="w-full flex justify-center sm:gap-x-[50px] gap-x-[15px]">
          <Button
            customClass1='lg:w-[250px] w-[100px] lg:h-[70px] h-[40px] bg-[#DC104F]'
            customClass2='lg:w-[244px] w-[94px] lg:h-[64px] h-[34px] bg-[#FF0B3B]'
            className="flex gap-x-4 py-[10px]"
            onClick={() => {
            window.open(
              'http://3.237.103.239/CroozeNFT/',
              '_blank',
              'noopener,noreferrer'
          )}}>
              <p className="font-molot text-white lg:text-2xl text-xs">LAUNCH GAME</p>
          </Button>
          <Button
            className="flex gap-x-4 py-[10px]"
            customClass1='lg:w-[200px] w-[60px] lg:h-[70px] h-[40px] bg-[#8840FF]'
            customClass2='lg:w-[194px] w-[54px] lg:h-[64px] h-[34px] bg-[#FFFFFF]'
          >
              <p className="font-molot text-[#8840FF] lg:text-2xl text-xs">SELL</p>
          </Button>
          <Button
            customClass1='lg:w-[80px] w-[40px] lg:h-[70px] h-[40px] bg-[#DC104F]'
            customClass2='lg:w-[74px] w-[34px] lg:h-[64px] h-[34px] bg-[#FFFFFF]'
            className="flex gap-x-4 py-[10px]"
          >
              <img className='lg:w-7 w-4' alt="" src='assets/icons/fire.svg'/>
          </Button>

          <Button
            customClass1='lg:w-[80px] w-[40px] lg:h-[70px] h-[40px] bg-[#8840FF]'
            customClass2='lg:w-[74px] w-[34px] lg:h-[64px] h-[34px] bg-[#FFFFFF]'
          >
              <img alt="" src='assets/icons/transfer.svg'/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyNFTs;
