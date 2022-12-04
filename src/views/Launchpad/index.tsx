import Button from "components/Button";

const LaunchPad = () => {
    return (
        <div className="flex flex-col justify-between w-full h-[100vh] bg-launchbg bg-cover px-[200px] py-[100px]">
            <img className="mx-auto" src="assets/intro.png"/>
            <Button className="text-white text-5xl font-bold mx-auto"
                width={450}
                height={100}
                bg1={"#DC104F"}
                bg2={"#FF0B3B"}
            >
                Launch Game
            </Button>
        </div>
    )
}

export default LaunchPad;