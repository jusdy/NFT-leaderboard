import { useState } from 'react';

interface TabsProps {
    onTabClick: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({
    onTabClick
}: TabsProps) => {
    const [tabId, setTabId] = useState<number>(1);

    return (
        <ul className="flex mr-[30px] text-center text-xl">
            <li className={`${tabId === 1 ? 'text-white bg-theme z-30' : ' bg-[#292C54] z-0 hover:bg-theme transition-all'} py-2 w-[155px] -mr-[20px] cursor-pointer polyborder`}
                onClick={() => {onTabClick(1);setTabId(1)}}
            >
                My NFTs
            </li>
            <li
                className={`${tabId === 2 ? 'text-white bg-theme z-20' : ' bg-[#292C54] z-0 hover:bg-theme transition-all'} py-2 w-[155px] -mr-[20px] cursor-pointer polyborder`}
                onClick={() => {onTabClick(2);setTabId(2)}}
            >
                All NFTs
            </li>
            <li
                className={`${tabId === 3 ? 'text-white bg-theme z-10' : ' bg-[#292C54] z-0 hover:bg-theme transition-all'} py-2 w-[155px] cursor-pointer polyborder`}
                onClick={() => {onTabClick(3);setTabId(3)}}
            >
                NFT Ledger
            </li>
        </ul>
    )
}

export default Tabs;