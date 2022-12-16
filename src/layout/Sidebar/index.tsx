import Button from 'components/Button';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

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
    return (
        <div className="flex flex-col z-50">
            <div className="w-[300px] h-[120px] bg-[#00072B] border-[3px] border-theme border-y-0 flex">
                <img className="w-content m-auto" src="assets/logo.png"/>
            </div>

            <div className="bg-[#321A74] w-[300px] h-[calc(100vh-120px)] border-[3px] border-b-0 border-theme flex flex-col">
                <div className="h-[150px] shrink-0 flex justify-center items-center gap-x-[50px]">
                    <img src="assets/icons/alert.svg"/>
                    <img src="assets/icons/wallet.svg"/>

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
    )
}

export default Sidebar;