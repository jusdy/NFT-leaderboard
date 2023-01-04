import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface MenuProps {
    title?: string;
    to: string;
    index: number;
}

const MenuItem = ( props: MenuProps ) => {
    const route = useLocation().pathname;
    const routeName = route.slice(1)

    return (
        <Link to={props.to}>
            <div className={`poly-bottom-right-s bg-theme border-theme border-t-[3px]`}>
                <div className={`flex items-center justify-center transition-all w-full h-[70px] poly-bottom-right-s2 bg-[#492D90] font-play text-white text-2xl hover:bg-gradient-to-r from-theme to-[#8840FF] ${props.title?.toLowerCase() === routeName.toLowerCase() ? "bg-gradient-to-r"  : ""}`}>
                    {props.title}
                </div>
            </div>
        </Link>
    )
}

export default MenuItem;