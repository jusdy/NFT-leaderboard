import { useState } from 'react';
import Tabs from 'components/Tabs';
import MyNFTs from './MyNFTs';
import NFTs from './NFTs';

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
        <div className="flex flex-col bg-darkbg w-full h-[100vh] py-[35px] px-[70px] text-white">
            <div className="flex items-end h-[80px] shrink-0">
                <Tabs onTabClick={onTabClick}/>
                {/* <button className="bg-listbtn w-[240px] h-[70px] mr-[50px] text-white text-2xl">Toogle Listed</button> */}
                {tabId === 1 &&
                    <Carousel className='grow w-0 h-[80px] mb-[10px]' showArrows={true} onClickThumb={(e) => console.log(e)}>
                    {carList.map((item, key) =>
                        <div key={key}>
                            <img src={item.image}/>
                        </div>
                    )}
                    </Carousel>
                }
            </div>

            {tabId === 1 && <MyNFTs/>}
            {tabId === 2 && <NFTs/>}
        </div>
    )
}

export default NFTView;