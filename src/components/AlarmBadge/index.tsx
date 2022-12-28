interface AlarmProps {
    badgeCount: number;
}

const AlarmBadge = (props: AlarmProps) => {
    return (
        <div className="relative">
            <img src="assets/icons/alert.svg"/>
            <span className="flex justify-center items-center absolute top-0 right-0 w-[20px] h-[20px] rounded-full bg-[#1271FF] text-white text-sm">{props.badgeCount}</span>
        </div>
    )
}

export default AlarmBadge;