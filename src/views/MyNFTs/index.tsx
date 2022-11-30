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

            <div className="flex flex-col border-[3px] border-[#AB40FF] w-full h-full">
                <div className="flex w-full h-full">
                    <div className="shrink-0 w-[290px] border-r-[3px] bg-opacity-20 bg-[#AA9DDB] border-[#AB40FF]">

                    </div>

                    <div className="flex flex-col w-full bg-[#090314]">
                        <div className='w-full h-[100px] bg-[#AB40FF]'></div>
                        <div className='h-full w-full'></div>
                    </div>
                </div>
                <div className="w-full h-[150px] bg-[#AB40FF]">
                </div>
            </div>
        </div>
    )
}

export default MyNFTs;