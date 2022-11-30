import PieChart from 'components/Piechart';
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

const MyNFTs = () => {
    return (
        <div className="flex flex-col bg-[#00082F] w-full h-[100vh] py-[35px] px-[145px]">
            <div className="flex mb-[10px] items-center">
                <button className="bg-listbtn w-[240px] h-[70px] mr-[50px] text-white text-2xl">Toogle Listed</button>
                <Carousel className='grow w-0' showArrows={true} onClickThumb={(e) => console.log(e)}>
                {carList.map((item, key) =>
                    <div key={key}>
                        <img src={item.image}/>
                    </div>
                )}
                </Carousel>
            </div>

            <div className="flex flex-col border-[3px] border-theme w-full h-full">
                <div className="flex w-full h-full">
                    <div className="shrink-0 w-[290px] border-r-[3px] bg-opacity-20 bg-[#AA9DDB] border-theme">

                    </div>

                    <div className="flex flex-col w-full bg-[#090314]">
                        <div className='w-full h-[80px] bg-theme'></div>
                        <div className='flex flex-col h-full w-full py-[40px] px-[100px]'>
                            <div className='grow'></div>
                            <div className='w-full h-[3px] mb-5 bg-white shadow-[0_0_8px_1px_rgba(18,113,255,1)] rounded-full '/>
                            <div className='flex justify-between'>
                                <PieChart value={66} title={"Speed"}/>
                                <PieChart value={36} title={"Acceleration"}/>
                                <PieChart value={16} title={"Handling"}/>
                                <PieChart value={86} title={"Rarity"}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="w-full h-[100px] bg-theme">
                </div>
            </div>
        </div>
    )
}

export default MyNFTs;