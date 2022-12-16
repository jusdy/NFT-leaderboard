import Button from "components/Button";

interface ItemProps {
    id: number;
    price: number;
}

const NFTItem = (props: ItemProps) => {
    return (
        <div className="flex flex-col justify-between border-[3px] bg-[#25145B] border-theme h-[350px] p-5">
            <p className="text-white text-2xl font-molot tracking-wider">#{props.id}</p>
            <div className="flex justify-center h-[200px]">
                <img className=" aspect-square h-full" src="assets/rank1.png"/>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-x-2">
                    <img src="assets/icons/crz.svg"/>
                    <p className="text-xl">{props.price} CRZ</p>
                </div>
                <Button className="polyborder-s text-theme font-play text-2xl" width={120} height={40} bg1="#AB40FF" bg2="#FFFFFF">Details</Button>
            </div>
        </div>
    )
}

export default NFTItem;