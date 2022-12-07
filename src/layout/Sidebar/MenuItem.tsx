import { Link } from 'react-router-dom';

interface MenuProps {
    title?: string;
    to: string;
    index: number;
}

const MenuItem = ( props: MenuProps ) => {
    return (
        <Link to={props.to}>
            <div className={`flex items-center justify-center transition-all border-t-[3px] border-theme w-full hover:w-[319px] h-[100px] bg-itembg hover:bg-itemhoverbg hover:bg-cover bg-cover font-play text-white text-2xl ${props.index === 4 ? 'border-b-[3px] hover:border-b-0' : ''}`}>
                {props.title}
            </div>
        </Link>
    )
}

export default MenuItem;