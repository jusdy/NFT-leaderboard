interface TrophyProps {
    id: number;
    rank: number;
}

const Trophy = (props: TrophyProps) => {
    return (
        <div className="relative">
            <span className={`
                ${props.rank === 1 ? "top-[calc(15%)] left-[calc(50%-13px)]" :
                props.rank === 2 ? "top-[calc(13%)] left-[calc(50%-13px)]" :
                "top-[calc(22%)] left-[calc(50%-15px)]"}
                absolute text-white font-bold underline`}>#{props.id}</span>

            <img alt="" className="" src={"assets/rank" + props.rank + ".png"}/>
        </div>
    )
}

export default Trophy;