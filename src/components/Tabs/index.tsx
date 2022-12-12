import { useState } from 'react';

interface TabsProps {
    onTabClick: (index: number) => void;
}

const tabList = [
    "My NFTs",
    "All NFTs",
    "NFT Ledger"
]

const Tabs: React.FC<TabsProps> = ({
    onTabClick
}: TabsProps) => {
    const [tabId, setTabId] = useState<number>(1);

    return (
        <ul className="flex mr-[30px] text-center text-xl">
            {tabList.map((item, key) => 
                <li key={key} className={`bg-theme relative py-2 w-[155px] h-[45px] ${key === tabList.length - 1 ? "" : "-mr-[20px]"} cursor-pointer polyborder-s`}
                    onClick={() => {onTabClick(key + 1);setTabId(key + 1)}}
                >
                    <div className={`${tabId === key + 1 ? 'text-white bg-theme z-30' : ' bg-[#292C54] z-0 hover:bg-theme transition-all'} absolute flex items-center justify-center top-[3px] left-[3px] w-[149px] h-[calc(100%-6px)] polyborder-s2`}>
                        {item}
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Tabs;