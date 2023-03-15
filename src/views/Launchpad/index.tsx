import Button from "components/Button";
import { Link } from "react-router-dom";

const LaunchPad = () => {
    return (
        <div className="relative flex flex-col justify-between w-full h-[100vh] lg:px-[200px] lg:py-[100px] px-[20px] pt-[100px] pb-[50px]">
            
            <Link className="md:hidden block text-white text-lg ml-5 font-play" to="">{"< "}Back to Main</Link>

            <img alt="" className="mx-auto" src="assets/intro.png"/>
            <Button className="text-white lg:text-5xl text-2xl font-bold m-auto "
                width={window.innerWidth > 768 ? 450 : 300}
                height={window.innerWidth > 768 ? 100 : 50}
                bg1={"#DC104F"}
                bg2={"#FF0B3B"}
                mxauto
                onClick={() => {
                    window.open(
                      'http://3.237.103.239/CroozeNFT/',
                      '_blank',
                      'noopener,noreferrer'
                    )
                }}
            >
                Launch Game
            </Button>
            <img alt="" className="md:block hidden absolute w-full h-full top-0 left-0 -z-[1]" src="assets/launchpadbg.png"/>
            <img alt="" className="md:hidden block absolute w-full h-full top-0 left-0 -z-[1]" src="assets/bgSmall.png"/>
        </div>
    )
}

export default LaunchPad;