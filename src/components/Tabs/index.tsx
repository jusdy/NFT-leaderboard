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
        <ul className="flex mr-[30px] text-center md:text-xl text-sm">
            {tabList.map((item, key) => 
                <li key={key} className={`bg-theme relative py-2 md:w-[155px] md:h-[45px] w-[106px] h-[35px] ${key === tabList.length - 1 ? "" : "-mr-[20px]"} cursor-pointer polyborder-s`}
                    onClick={() => {onTabClick(key + 1);setTabId(key + 1)}}
                >
                    <div className={`${tabId === key + 1 ? 'text-white bg-theme z-30' : ' bg-[#292C54] z-0 hover:bg-theme transition-all'} absolute flex items-center justify-center md:top-[3px] md:left-[3px] top-[2px] left-[2px] md:w-[149px] w-[102px] h-[calc(100%-4px)] polyborder-s2`}>
                        {item}
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Tabs;