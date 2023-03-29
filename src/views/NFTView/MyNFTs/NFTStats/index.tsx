import { useState } from 'react';
import Button from "components/Button";
import FuelTank from "components/FuelTank";
import TrophyBadge from "components/TrophyBadge";

interface NFTStatsType {
    onFuelClick: (param: boolean) => void;
}

const NFTStats = ({onFuelClick}: NFTStatsType) => {
    return (
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
            className1=""
            className="gap-x-4 py-[10px]"
            customClass1='w-[130px] h-[60px] bg-[#8840FF]'
            customClass2='w-[124px] h-[54px] bg-[#FFFFFF]'
            onClick={() => onFuelClick(true)}>
            <img alt="" className="h-full" src="assets/icons/fuelbox.svg"/>
            <div className="font-molot text-[#8840FF] text-xl">
              <p>BUY</p>
              <p>FUEL</p>
            </div>
          </Button>
        </div>
    )
}

export default NFTStats;