interface FuelTankProps {
    capacity: number;
}

const FuelTank = (props: FuelTankProps) => {
    return (
        <img src={'assets/icons/fuel' + props.capacity + ".svg"}/>
    )
}

export default FuelTank;