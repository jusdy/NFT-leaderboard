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

          <Button width={100} height={40} className1="sm:hidden block" className="gap-x-4 py-[10px]" bg1="#8840FF" bg2="#FFFFFF" onClick={() => setFuelPurchase(true)}>
          <img alt="" className="h-full" src="assets/icons/fuelbox.svg"/>
          <div className="font-molot text-[#8840FF] text-xs">
            <p>BUY</p>
            <p>FUEL</p>
          </div>
        </Button>
        </div>

        <div className="flex flex-col w-full bg-[#090314] bg-gradient-radial xl:order-2 order-1 from-[#264189FF] via-[#090314] to-[#090314]">
          <div className="flex items-center md:px-[50px] px-[20px] justify-between w-full h-[80px] bg-theme">
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
            <div className="grow"></div>
            <div className="w-full h-[3px] mb-5 bg-white shadow-[0_0_8px_1px_rgba(18,113,255,1)] rounded-full " />
            <div className="flex justify-between">
              <PieChart value={33} title={"Speed"} />
              <PieChart value={36} title={"Acceleration"} />
              <PieChart value={16} title={"Handling"} />
              <RarityBar/>
            </div>
          </div>
        </div>
      </div>

      <div className="shrink-0 w-full h-[100px] flex items-center sm:pl-[60px] bg-theme">
        <Button width={170} height={70} className1="sm:block hidden" className="gap-x-4 py-[10px]" bg1="#8840FF" bg2="#FFFFFF" onClick={() => setFuelPurchase(true)}>
          <img alt="" className="h-full" src="assets/icons/fuelbox.svg"/>
          <div className="font-molot text-[#8840FF] text-2xl">
            <p>BUY</p>
            <p>FUEL</p>
          </div>
        </Button>

        <div className="w-full flex justify-center sm:gap-x-[50px] gap-x-[15px]">
          <Button width={window.innerWidth > 1024 ? 250 : 100 } height={window.innerWidth > 1024 ? 70 : 40} className="flex gap-x-4 py-[10px]" bg1="#DC104F" bg2="#FF0B3B" onClick={() => {
            window.open(
              'http://3.237.103.239/CroozeNFT/',
              '_blank',
              'noopener,noreferrer'
          )}}>
              <p className="font-molot text-white lg:text-2xl text-xs">LAUNCH GAME</p>
          </Button>
          <Button width={window.innerWidth > 1024 ? 200 : 60} height={window.innerWidth > 1024 ? 70 : 40} className="flex gap-x-4 py-[10px]" bg1="#8840FF" bg2="#FFFFFF">
              <p className="font-molot text-[#8840FF] lg:text-2xl text-xs">SELL</p>
          </Button>
          <Button width={window.innerWidth > 1024 ? 80 : 40} height={window.innerWidth > 1024 ? 80 : 40} className="flex gap-x-4 py-[10px]" bg1="#DC104F" bg2="#FFFFFF">
              <img className='lg:w-7 w-4' alt="" src='assets/icons/fire.svg'/>
          </Button>

          <Button width={window.innerWidth > 1024 ? 80 : 40} height={window.innerWidth > 1024 ? 80 : 40} className="flex gap-x-4 py-[10px]" bg1="#8840FF" bg2="#FFFFFF">
              <img alt="" src='assets/icons/transfer.svg'/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyNFTs;
