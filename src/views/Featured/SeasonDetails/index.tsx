import Wrapper from "components/Wrapper"
import { Direction } from 'views/Featured'

const SeasonDetails = () => {
    return (
        <Wrapper direction={Direction.TopLeft} className="w-[350px] flex-shrink-0 h-full">
            <h3 className="py-[35px] font-molot text-2xl text-center text-white tracking-widest">SEASON DETAILS:</h3>
        </Wrapper>
    )
}

export default SeasonDetails