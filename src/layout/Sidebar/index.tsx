import MenuItem from './MenuItem';

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
]

const Sidebar = () => {
    return (
        <div className="flex flex-col z-50">
            <div className="w-[300px] h-[120px] bg-[#00072B] border-[3px] border-theme border-y-0 flex">
                <img className="w-content m-auto" src="assets/logo.png"/>
            </div>

            <div className="bg-[#321A74] w-[300px] h-[calc(100vh-120px)] border-[3px] border-b-0 border-theme flex flex-col overflow-auto scrollbar">
                <div className="h-[150px] shrink-0 flex justify-center items-center gap-x-[50px]">
                    <img src="assets/icons/alert.svg"/>
                    <img src="assets/icons/wallet.svg"/>

                </div>

                {
                    menuTitles.map((item, key) => <MenuItem key={key} to={item.linkTo} title={item.title} index={key}/>)
                }
            </div>
        </div>
    )
}

export default Sidebar;