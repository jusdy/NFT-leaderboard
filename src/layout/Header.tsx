import { useAppDispatch } from "hooks";
import { setMenuStatus } from "store/menu/action";

const Header = () => {
    const dispatch = useAppDispatch();

    const onMenuClick = () => {
        dispatch(setMenuStatus());
    } 

    return (
        <div className="md:hidden flex justify-between items-center fixed w-full h-[70px] border-b-2 border-theme bg-darkbg px-[30px]">
            <img onClick={onMenuClick} className="w-6" alt="" src="assets/icons/menu.svg"/>
            <img className="h-[50px]" alt="" src="assets/logo.png"/>
        </div>
    )
}

export default Header;