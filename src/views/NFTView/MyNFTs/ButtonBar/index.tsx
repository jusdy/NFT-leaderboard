import Button from "components/Button";

interface PropsType {
    className?: string;
}

const ButtonBar = ({
    className=''
}: PropsType) => {
    return (
        <div className={`${className} shrink-0 w-full h-[100px] items-center sm:pl-[60px] order-3`}>
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
    )
}

export default ButtonBar;