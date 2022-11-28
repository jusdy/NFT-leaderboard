import MenuItem from './MenuItem';

const menuTitles = [
    {
        title: "My NFTs",
        linkTo: "/mynfts"
    },
    {
        title: "Launchpad",
        linkTo: "/mynfts"
    },
    {
        title: "Leaderboard",
        linkTo: "/mynfts"
    },
    {
        title: "Featured",
        linkTo: "/mynfts"
    },
    {
        title: "Community Stats",
        linkTo: "/mynfts"
    }
]

const Sidebar = () => {
    return (
        <div className="flex flex-col">
            <div className="w-[300px] h-[120px] bg-[#00072B] border-[3px] border-[#AB40FF] border-b-0 flex">
                <img className="w-content m-auto" src="assets/logo.png"/>
            </div>

            <div className="bg-[#321A74] w-[300px] h-[calc(100vh-120px)] border-[3px] border-[#AB40FF] flex flex-col">
                <div className="h-[150px] flex justify-center items-center gap-x-[50px]">
                    <img src="assets/icons/alert.svg"/>
                    <img src="assets/icons/wallet.svg"/>
                </div>

                {
                    menuTitles.map((item, key) => <MenuItem to={item.linkTo} title={item.title} key={key}/>)
                }
            </div>
        </div>
    )
}

export default Sidebar;