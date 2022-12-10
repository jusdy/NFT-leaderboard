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
            <li className={`bg-theme relative py-2 w-[155px] h-[45px] -mr-[20px] cursor-pointer polyborder-s`}
                onClick={() => {onTabClick(1);setTabId(1)}}
            >
                <div className={`${tabId === 1 ? 'text-white bg-theme z-30' : ' bg-[#292C54] z-0 hover:bg-theme transition-all'} absolute flex items-center justify-center top-[3px] left-[3px] w-[149px] h-[calc(100%-6px)] polyborder-s2`}>
                    My NFTs
                </div>
            </li>
            <li
                className={`bg-theme relative py-2 w-[155px] -mr-[20px] cursor-pointer polyborder-s`}
                onClick={() => {onTabClick(2);setTabId(2)}}
            >
                <div className={`${tabId === 2 ? 'text-white bg-theme z-30' : ' bg-[#292C54] z-0 hover:bg-theme transition-all'} absolute flex items-center justify-center top-[3px] left-[3px] w-[149px] h-[calc(100%-6px)] polyborder-s2`}>
                    All NFTs
                </div>
            </li>
            <li
                className={`bg-theme relative py-2 w-[155px] cursor-pointer polyborder-s`}
                onClick={() => {onTabClick(3);setTabId(3)}}
            >
                <div className={`${tabId === 3 ? 'text-white bg-theme z-30' : ' bg-[#292C54] z-0 hover:bg-theme transition-all'} absolute flex items-center justify-center top-[3px] left-[3px] w-[149px] h-[calc(100%-6px)] polyborder-s2`}>
                    NFT Ledger
                </div>
            </li>
        </ul>
    )
}

export default Tabs;