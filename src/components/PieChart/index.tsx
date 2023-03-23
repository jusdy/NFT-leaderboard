import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ChartProps {
    value: number;
    title: string;
}

const PieChart = (props: ChartProps) => {
    return (
        <div className='flex flex-col items-center gap-y-[10px] tracking-widest'>
            <label className='text-white md:text-xl sm:text-md text-xs text-center'>{props.title}</label>
            <div className='relative md:w-[80px] md:h-[80px] w-[40px] h-[40px] rounded-full shadow-[0_0_8px_2px_rgba(18,113,255,1)]'>
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

                <div className='absolute md:top-[15px] md:left-[15px] top-[9px] left-[9px] md:w-[50px] md:h-[50px] w-[22px] h-[22px] rounded-full shadow-[0_0_10px_1px_rgba(18,113,255,1)_inset]'/>
            </div>
        </div>
    )
}

export default PieChart;