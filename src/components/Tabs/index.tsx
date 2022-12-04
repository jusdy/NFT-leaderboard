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
            <li className={`${tabId === 1 ? 'text-white bg-theme' : 'text-[gray] bg-theme/50'} py-2 w-[155px] -mr-[20px] cursor-pointer rounded-t-[10px] tabborder`}
                onClick={() => {onTabClick(1);setTabId(1)}}
            >
                My NFTs
            </li>
            <li
                className={`${tabId === 2 ? 'text-white bg-theme' : 'text-[gray] bg-theme/50'} py-2 w-[155px] cursor-pointer rounded-t-[10px] tabborder`}
                onClick={() => {onTabClick(2);setTabId(2)}}
            >
                NFTs
            </li>
        </ul>
    )
}

export default Tabs;