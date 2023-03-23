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
            <span className="absolute md:left-[7px] md:-top-[2px] left-[2px] -top-[6px]">{props.quantity}</span>
            <img className="md:w-[74px] w-[40px]" alt="" src={'assets/icons/fuel' + props.capacity + ".svg"}/>
            {props.children}
        </div>
    )
}

export default FuelTank;