import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from '../../../Redux/Reducer/reducer';


function Setting() {
    const isOpen = useSelector((state) => state.menu.isOpen);
    const dispatch = useDispatch();

    const handleCloseMenu = () => {
        dispatch(closeMenu());
  };
    return ( 
    <div className={`setting ${isOpen ? 'open' : ''}`}>
         <button className="btn-close" onClick={handleCloseMenu}>X</button>
        <ul>
            <li>
                <Link to = {'#'}>Hoan vuong</Link>
            </li>
            <li>
                <Link to = {'#'}>Hoan vuong</Link>
            </li>
            <li>
                <Link to = {'#'}>Hoan vuong</Link>
            </li>
            <li>
                <Link to = {'#'}>Hoan vuong</Link>
            </li>
            <li>
                <Link to = {'#'}>Hoan vuong</Link>
            </li>
        </ul>
    </div> 
    );
}

export default Setting;