import { Link } from 'react-router-dom';

interface MenuProps {
    title?: string;
    to: string;
}

const MenuItem = ( props: MenuProps ) => {

    return (
        <Link to={props.to}>
            <div className="flex items-center justify-center border-t-[3px] border-[#AB40FF] w-full hover:w-[310px] h-[100px] bg-itembg hover:bg-itemhoverbg bg-cover font-play text-white text-2xl">
                {props.title}
            </div>
        </Link>
    )
}

export default MenuItem;