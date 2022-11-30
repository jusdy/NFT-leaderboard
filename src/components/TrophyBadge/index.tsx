interface TrophyBadgeProps {
    rank: number;
}

const TrophyBadge = (props: TrophyBadgeProps) => {
    return (
        <div className="relative">
            <img src="assets/icons/trophy.svg"/>
            <div className="absolute w-[23px] h-[23px] rounded-full bg-[#1271FF] -top-[10px] -right-[5px] flex justify-center items-center font-bold text-lg">{props.rank}</div>
        </div>
    )
}

export default TrophyBadge;