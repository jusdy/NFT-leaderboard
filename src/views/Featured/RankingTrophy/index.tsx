import { Direction } from "views/Featured"
import Wrapper from "components/Wrapper";
import Trophy from "components/Trophy";

interface PropsType {
    season?: boolean;
}

const TrophyRanking = ( props: PropsType ) => {
    return (
        <Wrapper direction={props.season ? Direction.BottomRight : Direction.BottomLeft} className="w-full h-full flex flex-col">
            <div className={`${props.season ? "bg-theme" : "bg-[#EC26FD]"}  h-[80px] flex flex-col justify-center`}>
                <h3 className="font-molot tracking-widest text-2xl text-white text-center">{props.season ? "SEASON" : "MONTH"} 3</h3>
                <h3 className="tracking-widest text-xl text-white text-center">{props.season ? "TOP PERFORMERS" : "TOURNAMENT WINNERS"}</h3>
            </div>

            <div className="flex h-[calc(100%-80px)] justify-center items-end">
                <div className="flex max-w-[600px] items-end">
                    <Trophy id={2} rank={2}/>
                    <Trophy id={1} rank={1}/>
                    <Trophy id={3} rank={3}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default TrophyRanking;