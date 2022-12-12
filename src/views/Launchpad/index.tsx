import Button from "components/Button";

const LaunchPad = () => {
    return (
        <div className="relative flex flex-col justify-between w-full h-[100vh] px-[200px] py-[100px]">
            
            <img className="mx-auto" src="assets/intro.png"/>
            <Button className="text-white text-5xl font-bold mx-auto"
                width={450}
                height={100}
                bg1={"#DC104F"}
                bg2={"#FF0B3B"}
            >
                Launch Game
            </Button>
            <img className="absolute w-full h-full top-0 left-0 -z-[1]" src="assets/launchpadbg.png"/>
        </div>
    )
}

export default LaunchPad;