import FuelTank from 'components/FuelTank';
import PieChart from 'components/PieChart';
import TrophyBadge from 'components/TrophyBadge';
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
        <div className="flex flex-col bg-[#00082F] w-full h-[100vh] py-[35px] px-[145px] text-white">
            <div className="flex mb-[10px] items-center h-[100px]">
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
                <div className="flex w-full h-[calc(100vh-280px)]">
                    <div className="flex flex-col items-center overflow-auto scrollbar shrink-0 w-[290px] border-r-[3px] bg-opacity-20 bg-[#AA9DDB] border-theme py-[50px]">
                        <div className='flex flex-col justify-center items-center mb-[30px]'>
                            <h1 className='text-xl tracking-widest'>Position</h1>
                            <label className='text-[#AB40FF] text-2xl font-bold'>7</label>
                        </div>
                        <div className='flex flex-col justify-center items-center mb-[30px]'>
                            <h1 className='text-xl tracking-widest'>Earnings</h1>
                            <label className='text-[#AB40FF] text-2xl font-bold'>165</label>
                        </div>
                        <div className='flex flex-col justify-center items-center mb-[30px]'>
                            <h1 className='text-xl tracking-widest'>Points</h1>
                            <label className='text-[#AB40FF] text-2xl font-bold'>3000</label>
                        </div>
                        <div className='flex flex-col justify-center items-center mb-[30px]'>
                            <h1 className='text-xl tracking-widest'>Peak Price</h1>
                            <label className='text-[#AB40FF] text-2xl font-bold'>1.255</label>
                        </div>
                        <div className='flex flex-col justify-center items-center mb-[30px]'>
                            <h1 className='text-xl tracking-widest'>Peak Position</h1>
                            <label className='text-[#AB40FF] text-2xl font-bold'>2</label>
                        </div>
                        <div className='flex flex-col justify-center items-center mb-[30px]'>
                            <h1 className='text-xl tracking-widest mb-3'>Races</h1>
                            <img src='assets/icons/flag.svg'/>
                        </div>  
                        <div className='flex flex-col justify-center items-center mb-[60px]'>
                            <h1 className='text-xl tracking-widest mb-5'>Trophies</h1>
                            <TrophyBadge rank={2}/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <FuelTank capacity={4}/>
                        </div>
                    </div>

                    <div className="flex flex-col w-full bg-[#090314] bg-gradient-radial from-[#264189FF] via-[#090314] to-[#090314]">
                        <div className='flex items-center px-[50px] justify-between w-full h-[80px] bg-theme'>
                            <div className=''>
                                <span className='font-bold text-4xl'>#53</span>
                                <span className='text-lg'> ID</span>
                            </div>

                            <div className='flex gap-x-[20px] items-center'>
                                <img src='assets/icons/token.svg'/>
                                <div>
                                    <label className='font-bold text-4xl'>3.25 </label>
                                    <label className='text-lg'>CRZ</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col h-full w-full py-[40px] px-[100px]'>
                            <div className='grow'></div>
                            <div className='w-full h-[3px] mb-5 bg-white shadow-[0_0_8px_1px_rgba(18,113,255,1)] rounded-full '/>
                            <div className='flex justify-between'>
                                <PieChart value={66} title={"Speed"}/>
                                <PieChart value={36} title={"Acceleration"}/>
                                <PieChart value={16} title={"Handling"}/>
                                <div className='relative flex flex-col gap-y-[2px]'>
                                    <label className='text-xl tracking-widest text-center'>Rarity</label>
                                    <img className='w-[100px]' src='assets/icons/rarity.svg'/>
                                    <label className='absolute top-[47px] left-[38px] font-bold text-4xl'>1</label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="shrink-0 w-full h-[100px] bg-theme">
                </div>
            </div>
        </div>
    )
}

export default MyNFTs;