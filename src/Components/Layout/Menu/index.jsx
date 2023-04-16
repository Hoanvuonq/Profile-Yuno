import { useDispatch, useSelector } from 'react-redux';
import { openMenu, closeMenu } from '../../../Redux/Reducer/reducer';

import Setting from '../Setting/'
import SettingImg from '../../../Assets/icon/setting.png'


function Menu() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);
    const isMenuOpen = useSelector(state => state.menu.isMenuOpen);

    const handleOpenMenu = () => {
        dispatch(openMenu());
    };

    const handleCloseMenu = () => {
        dispatch(closeMenu());
    };

    return ( 
        <div className="menu">
           <div onClick={handleOpenMenu} className={`btn-menu ${isMenuOpen ? 'show-btn-menu' : 'hide-btn-menu'}`}>
                <img className="img-menu" src={SettingImg} alt="Setting" />
            </div>
            {isOpen && <Setting onClose={handleCloseMenu} />}
        </div>
     );
}

export default Menu;
