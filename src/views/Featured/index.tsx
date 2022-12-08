import Wrapper from "components/Wrapper";
import SeasonDetails from "./SeasonDetails";
import SeasonRanking from "./RankingTrophy";

export enum Direction {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight,
}

const Featured = () => {
    return (
        <div className="flex flex-col gap-y-10 w-full h-[100vh] p-[50px] bg-darkbg">
            <div className="flex gap-x-10 w-full h-full">
                <SeasonDetails/>
                <SeasonRanking season/>
            </div>
            <div className="flex gap-x-10 w-full h-full">
                <SeasonRanking/>
                <Wrapper direction={Direction.TopRight} className="w-[350px] flex-shrink-0 h-full"/>
            </div>
        </div>
    )
}

export default Featured;