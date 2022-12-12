import Wrapper from "components/Wrapper";
import { Direction } from "views/Featured";
import PlayerItem from "./PlayerItem";
import Trophy from "components/Trophy";

const Tournament = () => {
    return (
        <div className="flex h-[100vh] grow gap-x-10 p-[50px] bg-darkbg bg-gradient-radial from-[#264189FF] via-[#00082F] to-[#00082F]">
            <div className="flex flex-col gap-y-10 justify-between h-full">
                <Wrapper direction={Direction.TopLeft} className="w-[240px] h-[calc(50%-10px)] !bg-theme">
                    <div className="py-[30px] px-[20px] h-full">
                        <p className="font-molot text-2xl text-white text-center tracking-wider mb-[20px]">WEEK 1 QUALIFIERS</p>
                        <div className="overflow-auto h-[calc(100%-70px)] scrollbar">
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                        </div>
                    </div>

                </Wrapper>
                <Wrapper direction={Direction.BottomLeft2} className="w-[240px] h-[calc(50%-10px)] !bg-theme">
                    <div className="py-[30px] px-[20px] h-full">
                        <p className="font-molot text-2xl text-white text-center tracking-wider mb-[20px]">WEEK 1 QUALIFIERS</p>
                        <div className="overflow-auto h-[calc(100%-70px)] scrollbar">
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                        </div>
                    </div>
                </Wrapper>
            </div>

            <div className="flex flex-col w-full h-full justify-between">
                <p className="font-molot text-4xl text-white text-center tracking-wider mb-[20px]">MONTHLY TOURNAMENT</p>
                <div className="flex w-full h-full items-center justify-between">
                    <div className="flex flex-col w-[240px] shrink-0">
                        <p className="font-molot text-2xl text-white text-center tracking-wider mb-[10px]">SEMI-FINALS</p>
                        <Wrapper direction={Direction.None} className="w-full h-[350px]">
                            <div className="py-[20px] px-[20px] h-full">
                                <div className="overflow-auto h-full scrollbar">
                                    <PlayerItem className="h-[50px] mb-[10px]" nftId={122} date="12/5/2022"/>
                                    <PlayerItem className="h-[50px] mb-[10px]" nftId={122} date="12/5/2022"/>
                                    <PlayerItem className="h-[50px] mb-[10px]" nftId={122} date="12/5/2022"/>
                                    <PlayerItem className="h-[50px] mb-[10px]" nftId={122} date="12/5/2022"/>
                                </div>
                            </div>
                        </Wrapper>
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute px-[40px] top-[40px] w-full">
                            <div className="bg-white py-[20px] mb-[10px] border-[3px] border-theme w-full font-molot text-2xl text-theme text-center tracking-wider">
                                FINAL
                            </div>
                            <p className="text-xl text-white text-center tracking-wider mb-[10px]">QUALIFIERS END:</p>
                            <p className="text-sm text-white text-center tracking-wider mb-[10px]">11/30/22  12:00pm</p>
                        </div>
                        <Trophy id={12} rank={1}/>
                    </div>

                    <div className="flex flex-col w-[240px] shrink-0">
                        <p className="font-molot text-2xl text-white text-center tracking-wider mb-[10px]">SEMI-FINALS</p>
                        <Wrapper direction={Direction.None} className="w-full h-[350px]">
                            <div className="py-[20px] px-[20px] h-full">
                                <div className="overflow-auto h-full scrollbar">
                                    <PlayerItem className="h-[50px] mb-[10px]" nftId={122} date="12/5/2022"/>
                                    <PlayerItem className="h-[50px] mb-[10px]" nftId={122} date="12/5/2022"/>
                                    <PlayerItem className="h-[50px] mb-[10px]" nftId={122} date="12/5/2022"/>
                                    <PlayerItem className="h-[50px] mb-[10px]" nftId={122} date="12/5/2022"/>
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-10 justify-between h-full">
                <Wrapper direction={Direction.TopRight} className="w-[240px] h-[calc(50%-10px)] !bg-theme">
                    <div className="py-[30px] px-[20px] h-full">
                        <p className="font-molot text-2xl text-white text-center tracking-wider mb-[20px]">WEEK 1 QUALIFIERS</p>
                        <div className="overflow-auto h-[calc(100%-70px)] scrollbar">
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                        </div>
                    </div>
                </Wrapper>
                <Wrapper direction={Direction.BottomRight2} className="w-[240px] h-[calc(50%-10px)] !bg-theme">
                    <div className="py-[30px] px-[20px] h-full">
                        <p className="font-molot text-2xl text-white text-center tracking-wider mb-[20px]">WEEK 1 QUALIFIERS</p>
                        <div className="overflow-auto h-[calc(100%-70px)] scrollbar">
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                            <PlayerItem className="h-[50px] mb-[10px]" qualifier nftId={122} date="12/5/2022"/>
                        </div>
                    </div>
                </Wrapper>
            </div>            
        </div>
    )
}

export default Tournament;