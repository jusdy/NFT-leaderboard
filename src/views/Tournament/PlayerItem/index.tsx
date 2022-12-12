interface PlayerProps {
    nftId: number;
    date: string;
    className?: string;
    qualifier?: boolean;
}

const PlayerItem = ( props: PlayerProps ) => {
    return (
        <div className={`${props.className} relative ${props.qualifier ? "bg-[#8840FF]" : "bg-[#3150F2]"}`}>
            <div className={`absolute flex justify-between items-center top-[3px] left-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] py-[10px] px-5 text-white text-center ${props.qualifier ? "bg-theme" : "bg-[#1271FF]"}`}>
                <p className="text-2xl font-bold">#{props.nftId}</p>
                <p className="text-lg">{props.date}</p>
            </div>
        </div>
    )
}

export default PlayerItem;