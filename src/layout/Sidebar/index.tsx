import Button from 'components/Button';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
import AlarmBadge from 'components/AlarmBadge';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks';
import { setMenuStatus } from 'store/menu/action';

const menuTitles = [
    {
        title: "Launchpad",
        linkTo: "/launchpad"
    },
    {
        title: "NFTs",
        linkTo: "/nfts"
    },
    {
        title: "Leaderboard",
        linkTo: "/mynfts"
    },
    {
        title: "Featured",
        linkTo: "/featured"
    },
    {
        title: "Tournament",
        linkTo: "/tournament"
    },
    {
        title: "Community Stats",
        linkTo: "/comstats"
    },
]

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isMenu = useSelector((state: RootState) => state.menuReducer.isMenu)
    const onLayerClick = () => {
        dispatch(setMenuStatus());
    }

    return (
        <>
        {
            isMenu && 
            <div onClick={onLayerClick} className='absolute w-[100vw] h-[100vh] bg-[#000000] bg-opacity-40 z-10'/>
        }
        <div className={`flex flex-col z-50 lg:relative fixed transition-all duration-500 lg:left-0 ${isMenu ? "left-0" : " -left-[240px]"}`}>
            <div className="xl:w-[300px] w-[240px] h-[120px] bg-[#00072B] border-[3px] border-theme border-t-0 lg:flex hidden">
                <img alt="logo" className="w-content m-auto" src="assets/logo.png"/>
            </div>

            <div className="bg-[#321A74] z-20 lg:bg-opacity-100 bg-opacity-50 lg:backdrop-blur-none backdrop-blur xl:w-[300px] w-[240px] lg:h-[calc(100vh-120px)] h-[100vh] border-[3px] border-y-0 border-theme flex flex-col">
                <div className="lg:h-[150px] h-[100px] shrink-0 flex justify-center items-center gap-x-[50px]">
                    <AlarmBadge badgeCount={20}/>
                    <img alt="" className='lg:w-[64px] w-[50px]' src="assets/icons/wallet.svg"/>
                </div>
                <div className='overflow-auto scrollbar'>
                {
                    menuTitles.map((item, key) => <MenuItem key={key} to={item.linkTo} title={item.title} index={key}/>)
                }
                </div>

                <div className='py-[30px] flex flex-col justify-center items-center gap-y-[15px] border-t-[3px] border-theme'>
                    <Button bg1='#3150F2' bg2='#1271FF' className='!font-play text-white py-[10px] text-xl' height={50}>NFT Generator</Button>
                    <Link to={'#'} className="text-[#1271FF] underline underline-offset-8 text-2xl">How To Play</Link>
                    <Link to={'#'} className="text-[#1271FF] underline underline-offset-4 text-2xl">FAQ</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;