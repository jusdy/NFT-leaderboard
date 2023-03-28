import { useState } from 'react';
import Tabs from 'components/Tabs';
import MyNFTs from './MyNFTs';
import NFTs from './NFTs';
import Ledger from './Ledger';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carList = [
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
    {image: "assets/logo.png"},
]

const NFTView = () => {
    const [tabId, setTabId] = useState<number>(1);
    const onTabClick = (index: number) => {
        setTabId(index);
    }

    return (
        <div className="flex flex-col bg-darkbg w-full xl:h-[100vh] h-fit lg:py-[35px] pt-[90px] pb-[20px] 2xl:px-[70px] md:px-[50px] px-[20px] text-white">
            <div className="flex xl:flex-row flex-col xl:items-end items-start xl:h-[80px] h-fit shrink-0">
                <Tabs onTabClick={onTabClick}/>
                {tabId === 1 &&
                    <Carousel className='grow xl:w-0 lg:w-[600px] w-full h-[80px] mb-[10px]' showArrows={true} onClickThumb={(e) => console.log(e)}>
                    {carList.map((item, key) =>
                        <div key={key}>
                            <img alt="" src={item.image}/>
                        </div>
                    )}
                    </Carousel>
                }
            </div>

            {tabId === 1 && <MyNFTs/>}
            {tabId === 2 &&
            <div className='h-[calc(100vh-175px)]'>
                <NFTs/>
            </div>
            }
            {tabId === 3 && <Ledger/>}
        </div>
    )
}

export default NFTView;