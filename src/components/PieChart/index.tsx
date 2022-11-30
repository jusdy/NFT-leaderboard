import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ChartProps {
    value: number;
    title: string;
}

const PieChart = (props: ChartProps) => {
    return (
        <div className='flex flex-col items-center gap-y-[10px] tracking-widest'>
            <label className='text-white text-xl text-center'>{props.title}</label>
            <div className='relative w-[80px] h-[80px] rounded-full shadow-[0_0_8px_2px_rgba(18,113,255,1)]'>
                <CircularProgressbar
                    value={props.value}
                    strokeWidth={20}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        backgroundColor: '#00082F',
                        pathColor: "#FFFFFF",
                        trailColor: "#00082F", 
                    })}
                />

                <div className='absolute top-[15px] left-[15px] w-[50px] h-[50px] rounded-full shadow-[0_0_10px_1px_rgba(18,113,255,1)_inset]'/>
            </div>
        </div>
    )
}

export default PieChart;