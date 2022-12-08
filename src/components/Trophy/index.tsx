interface TrophyProps {
    id: number;
    rank: number;
}

const Trophy = (props: TrophyProps) => {
    return (
        <div className="relative">
            <span className={`
            ${props.rank === 1 ? "top-[42px] left-[calc(50%-13px)]" :
            props.rank === 2 ? "top-[30px] left-[calc(50%-13px)]" :
            "top-[52px] left-[calc(50%-15px)]"
            }
             absolute text-white font-bold underline`}>#12</span>
            <img className="" src={"assets/rank" + props.id + ".png"}/>
        </div>
    )
}

export default Trophy;