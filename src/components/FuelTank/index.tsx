interface FuelTankProps {
    capacity: number;
    quantity: number;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    children: React.ReactNode;
}

const FuelTank = (props: FuelTankProps) => {
    return (
        <div className="relative" onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
            <span className="absolute left-[7px] -top-[2px]">{props.quantity}</span>
            <img alt="" src={'assets/icons/fuel' + props.capacity + ".svg"}/>
            {props.children}
        </div>
    )
}

export default FuelTank;